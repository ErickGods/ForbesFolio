/**
 * validate-projects.js
 * 
 * CI validation script — checks that all projects in src/data/projects.js
 * have valid data and corresponding cover images exist.
 * 
 * Usage: node scripts/validate-projects.js
 * Exit code 0 = all valid, 1 = validation errors found
 */

import { readFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')

// ============================================
// Required fields for each project
// ============================================
const REQUIRED_FIELDS = ['id', 'title', 'coverImage', 'category', 'year', 'description', 'client', 'role']

const VALID_CATEGORIES = [
    'Web Development',
    'UI/UX Design',
    'Data Analysis',
    'Automation',
    'Mobile App',
    'DevOps',
    'Machine Learning',
    'Power Platform',
    'Branding',
    'Product Design',
    'Web Design',
]

// ============================================
// Read and parse projects data
// ============================================
async function loadProjects() {
    const filePath = resolve(ROOT, 'src/data/projects.js')

    if (!existsSync(filePath)) {
        console.error('❌ projects.js not found at:', filePath)
        process.exit(1)
    }

    const content = readFileSync(filePath, 'utf-8')

    // Extract the PROJECTS array content between the opening [ and closing ]
    const arrayMatch = content.match(/const PROJECTS\s*=\s*\[([\s\S]*?)\]\s*$/m)
    if (!arrayMatch) {
        console.error('❌ Could not find PROJECTS array in projects.js')
        process.exit(1)
    }

    // Split by top-level object boundaries: split on patterns like "},\n    {"
    // Each block is one project entry
    const arrayContent = arrayMatch[1]
    const blocks = []
    let depth = 0
    let current = ''

    for (const char of arrayContent) {
        if (char === '{') {
            depth++
            current += char
        } else if (char === '}') {
            depth--
            current += char
            if (depth === 0 && current.trim()) {
                blocks.push(current)
                current = ''
            }
        } else {
            if (depth > 0) {
                current += char
            }
        }
    }

    if (blocks.length === 0) {
        console.error('❌ No project entries found in projects.js')
        process.exit(1)
    }

    return blocks
}

// ============================================
// Validate each project block
// ============================================
function validateProjectBlock(block, index) {
    const errors = []
    const projectNum = index + 1

    // Check required fields exist in the block
    for (const field of REQUIRED_FIELDS) {
        const regex = new RegExp(`${field}\\s*:`)
        if (!regex.test(block)) {
            errors.push(`  Missing required field: "${field}"`)
        }
    }

    // Extract ID for better error messages
    const idMatch = block.match(/id\s*:\s*['"]([^'"]+)['"]/)
    const projectId = idMatch ? idMatch[1] : `#${projectNum}`

    // Check year format
    const yearMatch = block.match(/year\s*:\s*['"](\d{4})['"]/)
    if (yearMatch) {
        const year = parseInt(yearMatch[1])
        if (year < 2000 || year > new Date().getFullYear() + 1) {
            errors.push(`  Year "${yearMatch[1]}" seems invalid`)
        }
    }

    // Check category is valid
    const catMatch = block.match(/category\s*:\s*['"]([^'"]+)['"]/)
    if (catMatch && !VALID_CATEGORIES.includes(catMatch[1])) {
        errors.push(`  Unknown category: "${catMatch[1]}". Valid: ${VALID_CATEGORIES.join(', ')}`)
    }

    // Check description length
    const descMatch = block.match(/description\s*:\s*['"](.*?)['"]/)
    if (descMatch && descMatch[1].length < 20) {
        errors.push(`  Description too short (${descMatch[1].length} chars, min 20)`)
    }

    return { projectId, errors }
}

// ============================================
// Check cover images exist in public/
// ============================================
function checkCoverImages() {
    const projectsFile = readFileSync(resolve(ROOT, 'src/data/projects.js'), 'utf-8')
    const errors = []

    // Extract image paths
    const imageMatches = projectsFile.matchAll(/coverImage\s*:\s*`\$\{BASE_URL\}([^`]+)`/g)
    for (const match of imageMatches) {
        const imagePath = match[1]
        const fullPath = resolve(ROOT, 'public', imagePath)
        if (!existsSync(fullPath)) {
            errors.push(`  Cover image not found: public/${imagePath}`)
        }
    }

    return errors
}

// ============================================
// Main
// ============================================
async function main() {
    console.log('🔍 Validating ForbesFolio projects...\n')

    let hasErrors = false

    // 1. Load and validate project blocks
    const blocks = await loadProjects()
    console.log(`📚 Found ${blocks.length} project(s)\n`)

    for (let i = 0; i < blocks.length; i++) {
        const { projectId, errors } = validateProjectBlock(blocks[i], i)

        if (errors.length > 0) {
            console.error(`❌ Project "${projectId}":`)
            errors.forEach((e) => console.error(e))
            console.log()
            hasErrors = true
        } else {
            console.log(`✅ Project "${projectId}" — valid`)
        }
    }

    // 2. Check cover images
    console.log('\n📸 Checking cover images...')
    const imageErrors = checkCoverImages()
    if (imageErrors.length > 0) {
        imageErrors.forEach((e) => console.error(e))
        hasErrors = true
    } else {
        console.log('✅ All cover images found\n')
    }

    // 3. Summary
    if (hasErrors) {
        console.error('\n❌ Validation failed — fix the errors above before merging.')
        process.exit(1)
    } else {
        console.log('✅ All projects validated successfully!')
        process.exit(0)
    }
}

main()
