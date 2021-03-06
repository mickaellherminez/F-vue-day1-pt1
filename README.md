# vue-js-training-day1

## 1. Introduction
### 1.1. À propos de Vue.js

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

## 2. Les fondamentaux de Vue.js
### 2.1. L'instance de vue

Pour instancier Vue.js il faut ajouter dans le fichier index.html:

```
<div id="app">
    <!-- code de l'application -->
</div>
```

Et dans le fichier javascript: 

```
const app = Vue.createApp({ })
```

### 2.2. L'interpolation de texte

L'interpolation de texte s'effectue entre le Javascript dans le bloc ```data()``` et le html avec la "Syntaxe Moustaches" ```{{```.

html:
```
<span> Hello {{ message }} </span>
```
javascript:
```
data() {
    return {
        message: "World"
    }
}
```

### 2.3. Utiliser les liaisons d'attribut

html:
```
<img v-bind:src="image">
```

javascript:
```
data() {
    return {
        image: "assets/images/example.jpeg"
    }       
}
```

### 2.4. Exploiter les conditions

html:
```
<div v-if="exist">
    <span>text</span>
</div>
```

javascript:
```
data() {
    return {
        exist: true,
    }       
},
```

### 2.5. Afficher ou cacher des éléments

html:
```
<div v-show="show">
    <span>text</span>
</div>
```

javascript:
```
data() {
    return {
        show: true,
    }       
},
```

### 2.6. Utiliser les boucles

html:
```
<span v-for="item in items">{{item}},</span>

```

javascript:
```
items: [
    { label: 'AngularJS'}, {
      label: 'SQL'}, {
      label: 'CSS'}, {
      label: 'Bootstrap'}, {
      label: 'HTML5'}, {
      label: 'C#'}, {
      label: 'jQuery'}, {
      label: 'Docker'}, {
      label: 'Angular 4, 5, 6, 7...'}, {
      label: 'Vue 2, 3'}
]
```

### 2.7. Comprendre l'attribut Key

html:
```
<span v-for="(item, index) in items" :key="index">{{item}}</span>
```

### 2.8. Écouter les évènements

html:
```
<input v-on:click="action..." type="checkbox" id="checkbox" v-model="checked">
```

### 2.9. Découvrir la liaison bidirectionnelle

html:
```
<input v-model="value" type="text" placeholder="data">
```

javascript:
```
data() {
    return {
        value: ""
    }
}
```

### 2.10. Comprendre les méthodes dans Vue.js

html:
```
<button @click="order()">Mettre en ordre</button>
```

javascript:
```
methods: {
    order() {}
}
```


