# Cabei

**Cabei** é um gerenciador pessoal de jogos para organizar sua jornada gamer. O projeto está em desenvolvimento e usa Expo, React Native e TypeScript.

## Pré-requisitos

- Node.js em uma versão LTS compatível com o Expo.
- npm (instalado junto com o Node.js).
- Para executar no Android, escolha uma das opções:
  - **Emulador:** Android Studio instalado e um dispositivo virtual Android criado e iniciado.
  - **Dispositivo físico:** aplicativo Expo Go instalado no celular. O computador e o celular devem estar na mesma rede local.

## Instalação

Na pasta do projeto, instale as dependências:

```bash
npm install
```

## Executar no Android

Inicie o servidor de desenvolvimento:

```bash
npx expo start
```

- **Emulador Android:** com o emulador aberto, pressione `a` no terminal do Expo. Também é possível iniciar diretamente com `npm run android`.
- **Expo Go:** abra o Expo Go no celular e leia o QR code exibido no terminal. Se a conexão pela rede local não funcionar, inicie com `npx expo start --tunnel`.

## Outros comandos

```bash
npm start         # Inicia o servidor de desenvolvimento do Expo
npm run android   # Inicia o Expo e tenta abrir no emulador Android
npm run ios       # Inicia o Expo e tenta abrir no simulador iOS (macOS)
npm run lint      # Verifica problemas de lint
```

## Stack

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
