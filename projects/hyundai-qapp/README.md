# QApp — Quality Assurance Platform

> Enterprise quality assurance platform for Hyundai Motor Brasil, enabling 40+ users to track warranty analysis, failure modes, and part defect patterns across the entire post-sale quality process.

## 📋 Informações

| Campo | Valor |
|-------|-------|
| **Categoria** | `Data & Automation Engineering` |
| **Ano** | `2024 — Present` |
| **Cliente/Empresa** | Hyundai Motor Brasil |
| **Papel** | Solo Developer — Full Architecture & Development |
| **Status** | Em produção (deploy oficial: Maio 2024) |

## 🎯 Descrição

Plataforma completa de Quality Assurance desenvolvida inteiramente como solo developer para a Hyundai Motor Brasil. O QApp centraliza todo o processo de análise de qualidade de peças, desde o recebimento de dados de garantia até o registro de modos de falha, permitindo que analistas, supervisores, gerentes e mecânicos — 40 pessoas no total — tenham acesso a uma ferramenta unificada para o dia a dia da área de qualidade.

O sistema foi construído sobre uma arquitetura robusta em SQL Server com tabelas fato e dimensão, views, stored procedures e triggers, garantindo integridade e performance na manipulação dos dados. O frontend foi desenvolvido em Power Apps com fluxos automatizados via Power Automate e armazenamento complementar no SharePoint.

### Funcionalidades Principais

- **Consulta de Garantias**: Visualização de garantias filtradas por analista, data de entrada, data de reparo, data do indicador, código de peça e concessionário
- **Registro de Modos de Falha**: Lançamento de modos de falha por peça diretamente no sistema, centralizado no SQL Server
- **Análise de Padrões**: Identificação de qual modo de falha causou mais garantias e qual peça teve mais defeitos
- **Multi-perfil**: Acesso diferenciado para analistas de QA, supervisores, gerentes e mecânicos
- **Integração com GPTIS**: Dados de rastreabilidade do GPTIS disponíveis para consulta dentro do QApp via SQL Server compartilhado

## 🛠️ Tecnologias

| Tecnologia | Uso |
|-----------|-----|
| Power Apps | Frontend — Interface do usuário e formulários |
| SQL Server | Backend — Tabelas fato/dimensão, views, SPs, triggers |
| Power Automate | Automação de fluxos e notificações |
| SharePoint | Armazenamento complementar e gestão documental |
| T-SQL | Queries complexas, stored procedures e triggers |
| Data Modeling | Modelagem dimensional (fato e dimensão) |

## 📊 Resultados

- **40 usuários ativos** entre analistas, supervisores, gerentes e mecânicos
- **Solo developer** — arquitetura completa do zero (SQL Server + Power Apps + Power Automate + SharePoint)
- **Deploy oficial em Maio/2024** — em produção contínua com melhorias incrementais
- Centralização de **todo o processo de QA** em uma única plataforma
- Identificação de padrões de falha que antes eram impossíveis de rastrear manualmente

## 🌊 Deep Dive (Overlay Content)

### The Challenge (O Desafio)
The Quality Assurance team at Hyundai Motor Brasil lacked a centralized system to manage the entire warranty analysis process. Analysts were working with fragmented tools and manual processes to track warranty entries, repair dates, part codes, and failure modes across multiple dealers. This fragmentation made it nearly impossible to identify patterns — such as which failure mode was causing the most warranties or which parts had the highest defect rates — leading to delayed responses and reactive rather than proactive quality management.

### The Solution (A Solução)
I designed and built the QApp from the ground up as a solo developer, architecting a robust SQL Server backend with dimensional modeling (fact and dimension tables), views, stored procedures, and triggers to ensure data integrity and high-performance queries. The user-facing application was developed in Power Apps, providing an intuitive interface for 40 users across four different roles — QA analysts, supervisors, managers, and mechanics. Power Automate handles workflow automation and notifications, while SharePoint provides complementary document storage. The platform integrates with existing GPTIS traceability data through the shared SQL Server infrastructure.

### The Result (O Resultado)
Since its official deployment in May 2024, QApp has become the single source of truth for quality assurance at Hyundai Motor Brasil. All 40 team members actively use the platform daily, with the ability to track warranties by analyst, entry date, repair date, indicator date, part code, and dealer. The centralized failure mode registry now enables data-driven decisions — the team can instantly identify which failure modes cause the most warranty claims and which parts have the highest defect rates, transforming quality management from reactive to proactive.
