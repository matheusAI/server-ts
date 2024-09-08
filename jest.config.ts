import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest', // Usa 'ts-jest' para compilar TypeScript
  testEnvironment: 'node', // O ambiente de teste será o Node.js
  verbose: true, // Mostra resultados detalhados dos testes no console
  collectCoverage: true, // Coleta a cobertura dos testes
  coverageDirectory: "coverage", // Diretório para salvar os relatórios de cobertura
  testMatch: ['**/*.test.ts'], // Executa arquivos com extensão .test.ts
  moduleFileExtensions: ['ts', 'js', 'json'], // Suporte para essas extensões
};

export default config;
