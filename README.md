# Luz & Cena

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

Projeto fictício que exibe os filmes em cartaz de um cinema, desenvolvido em React + TypeScript.

## Tecnologias e Bibliotecas

- **React** (v19)
- **TypeScript**
- **Vite** (build e dev server)
- **Axios** (requisições HTTP)
- **react-icons** (ícones SVG)
- **json-server** (API fake para desenvolvimento)
- **ESLint** (padronização e qualidade de código)

## Estrutura e Padrões

- **Componentização**: Componentes funcionais reutilizáveis, organizados por domínio em `src/components`.
- **Hooks customizados**: Lógica de busca e filtro de filmes em `src/hooks` (`useFetchMovies`, `useFilterMovies`, `useFetchCities`).
- **Separação de estilos**: CSS Modules para isolamento de estilos por componente.
- **API fake**: Consumo de dados via `json-server` usando o arquivo `db.json`.
- **Tipagem**: Tipos TypeScript centralizados em `src/types`.

## Setup e Execução

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie a API fake:**
   ```bash
   npm run server
   ```
   A API estará disponível em [http://localhost:3001](http://localhost:3001).

3. **Inicie o projeto em modo desenvolvimento:**
   ```bash
   npm run dev
   ```
   O app estará disponível em [http://localhost:5173](http://localhost:5173) (ou porta indicada no terminal).

4. **Build para produção:**
   ```bash
   npm run build
   ```

5. **Lint do projeto:**
   ```bash
   npm run lint
   ```

## Observações

- O projeto é fictício e não possui fins comerciais.
- Os dados de filmes **e cidades** estão em `db.json` e podem ser editados conforme necessário.
