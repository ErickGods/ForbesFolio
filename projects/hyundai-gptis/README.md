# GPTIS — Parts Traceability System

> End-to-end parts traceability system for Hyundai Motor Brasil, managing datamatrix-based tracking across the entire supply chain and assembly line.

## 📋 Informações

| Campo | Valor |
|-------|-------|
| **Categoria** | `Supply Chain & MES` |
| **Ano** | `2023 — Present` |
| **Cliente/Empresa** | Hyundai Motor Brasil |
| **Papel** | Data & Automation Engineer |
| **Status** | Em andamento |

## 🎯 Descrição

Responsável por toda a rastreabilidade de peças montadas nos veículos da Hyundai Motor Brasil através do sistema GPTIS (Global Parts Traceability Information System). O sistema utiliza etiquetas em formato datamatrix para sequenciar e endereçar peças na linha de montagem, garantindo que cada componente seja associado ao veículo correto.

A arquitetura envolve leitura de datamatrix nas estações da linha, armazenamento no MES (Manufacturing Execution System), envio para bancos de dados intermediários via EAIs (Enterprise Application Integration), e transmissão final para o portal corporativo na Coreia do Sul, onde são consolidados os dados globais de rastreabilidade.

## 🛠️ Tecnologias

| Tecnologia | Uso |
|-----------|-----|
| GPTIS | Sistema de rastreabilidade global Hyundai |
| MES | Manufacturing Execution System — armazenamento de leitura |
| EAI | Enterprise Application Integration — envio de dados |
| Datamatrix | Formato de etiqueta para rastreabilidade |
| SQL / T-SQL | Consultas e análise de dados de rastreabilidade |
| Power BI | Dashboards de indicadores de leitura |

## 📊 Resultados

- **+50% de aumento** na aplicação de peças rastreadas desde que assumiu a responsabilidade
- Modelos anteriores: de **100-110 peças** para **166-170 peças** rastreadas por veículo
- Novo modelo (desde o lançamento): **175-179 peças** rastreadas por veículo
- Índice médio de leitura: **97,8%**
- Interface com **3+ modelos** de veículos simultaneamente

## 🌊 Deep Dive (Overlay Content)

### The Challenge (O Desafio)
A rastreabilidade de peças em uma montadora automotiva é crítica para garantir qualidade, segurança e conformidade regulatória. Ao assumir a responsabilidade pelo GPTIS na Hyundai Motor Brasil, o sistema estava operando com cobertura limitada — entre 100 e 110 peças rastreadas por veículo, dependendo do modelo — deixando lacunas significativas na cadeia de rastreabilidade.

### The Solution (A Solução)
Implementei uma abordagem sistemática para expandir a cobertura do GPTIS: mapeamento detalhado de todas as peças elegíveis, configuração de novas estações de leitura na linha de montagem, integração com o código Hyundai para etiquetas datamatrix, e otimização do fluxo de dados MES → EAI → Portal Coreia. Cada peça adicionada exigiu validação do formato de datamatrix, teste de leitura nas estações e confirmação de transmissão end-to-end.

### The Result (O Resultado)
Aumento de mais de 50% na aplicação de peças rastreadas em todos os modelos. Os modelos existentes passaram de 100-110 para 166-170 peças, e o novo modelo lançado sob minha gestão já opera com 175-179 peças rastreadas. O índice médio de leitura alcançou 97,8%, demonstrando alta confiabilidade do sistema de rastreabilidade.
