# Portfolio de Diego De Massy

![Portfolio Preview](/public/images/LesMondesFantastiques.png)

## 📋 Description

Portfolio personnel présentant mes projets, compétences et expériences en tant que développeur web full stack. Ce site a été construit avec Next.js et React, offrant une expérience utilisateur moderne et réactive.

## 🚀 Technologies Utilisées

- **Frontend**: React.js, Next.js
- **Styling**: Styled Components, Styled Normalize
- **Icons**: React Icons
- **Déploiement**: Vercel (recommandé)

## 🛠️ Installation et Configuration

### Prérequis

- Node.js (v16+ recommandé, v23+ nécessite des configurations spéciales)
- npm ou yarn

### Installation

1. Clonez le dépôt
   ```bash
   git clone https://github.com/votre-username/portfolio_website.git
   cd portfolio_website
   ```

2. Installez les dépendances
   ```bash
   npm install
   # ou
   yarn install
   ```

### Démarrage du Serveur de Développement

#### Avec Node.js v16-v18
```bash
npm run dev
# ou
yarn dev
```

#### Avec Node.js v23+
En raison de changements dans les algorithmes de chiffrement par défaut dans les nouvelles versions de Node.js, vous devez utiliser l'option OpenSSL legacy :

```bash
npm run dev:legacy
# ou
yarn dev:legacy
```

Le site sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

### Construction pour la Production

#### Avec Node.js v16-v18
```bash
npm run build
# ou
yarn build
```

#### Avec Node.js v23+
```bash
npm run build:legacy
# ou
yarn build:legacy
```

### Démarrage en Mode Production

```bash
npm start
# ou
yarn start
```

## 📂 Structure du Projet

```
/
├── public/            # Fichiers statiques (images, etc.)
├── src/
│   ├── components/    # Composants React réutilisables
│   ├── constants/     # Données constantes (projets, timeline)
│   ├── layout/        # Composants de mise en page
│   ├── pages/         # Pages Next.js
│   ├── styles/        # Styles globaux
│   └── themes/        # Thèmes de l'application
├── .babelrc           # Configuration Babel
├── package.json       # Dépendances et scripts
└── README.md          # Documentation
```

## 📱 Fonctionnalités

- **Design Responsive**: S'adapte à tous les appareils (mobile, tablette, desktop)
- **Projets**: Présentation des projets avec descriptions, images et liens
- **Timeline**: Chronologie des expériences professionnelles
- **Contact**: Formulaire de contact et informations
- **Réseaux Sociaux**: Liens vers les profils GitHub, LinkedIn, etc.

## 🔧 Personnalisation

### Projets

Modifiez le fichier `src/constants/constants.js` pour ajouter, modifier ou supprimer des projets.

### Timeline

Modifiez le fichier `src/constants/constants.js` pour mettre à jour votre parcours professionnel.

### Informations de Contact

Modifiez le composant `src/components/Footer/Footer.js` pour mettre à jour vos informations de contact.

## 📄 Licence

Ce projet est sous licence [MIT](LICENSE).

## 👨‍💻 Auteur

**Diego De Massy**
- GitHub: [DiegoMarck](https://github.com/DiegoMarck)
- LinkedIn: [Votre profil LinkedIn]
- Site Web: [d-de-massy.com](https://d-de-massy.com)
