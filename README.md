# vue-js-training-day1

## 1. Introduction
### 1,1, À propos de Vue.js
[Vue.js Wikipedia](https://fr.wikipedia.org/wiki/Vue.js)

[Vue.js 2 (doc)](https://vuejs.org/v2/guide/)

[Vue.js 3 (doc)](https://v3.vuejs.org/guide/introduction.html)

### 1.2. Installer Vue.js

Importer en tant que package CDN sur la page

```
<script src="https://unpkg.com/vue@next"></script>
```

Téléchargez les fichiers JavaScript et hébergez-les vous-même.

Les fichiers peuvent être parcourus et téléchargés à partir d'un CDN tel que unpkg ou jsDelivr.

- [unpkg](https://unpkg.com/browse/vue@next/dist/)

- [jsdelivr](https://cdn.jsdelivr.net/npm/vue@next/dist/)

Installer en utilisant npm

```
# latest stable
$ npm install vue@next
```

Utilisez l'interface en ligne de commande officielle pour configurer un projet, il fournit des configurations de construction avec une batteries de flux de travail frontal moderne (par exemple, rechargement à chaud...)

Pour Vue 3, vous devez utiliser Vue CLI v4.5 disponible sur npm @vue/cli. Pour mettre à niveau, vous devez réinstaller la dernière version de @vue/cli globalement:

```
yarn global add @vue/cli
# OR
npm install -g @vue/cli
```

Vite:

Les projets Vue peuvent être rapidement configurés avec Vite en exécutant les commandes suivantes dans un terminal.

Avec npm:
```
$ npm init @vitejs/app <project-name>
$ cd <project-name>
$ npm install
$ npm run dev
```

Ou avec du yarn:
```
$ yarn create @vitejs/app <project-name>
$ cd <project-name>
$ yarn
$ yarn dev
```





