# AZURIA — Poissons & Saveurs | Menu Digital QR

Site web de menu digital QR mobile-first pour le restaurant de poissons et fruits de mer **AZURIA** (Corniche, Casablanca). Conçu en HTML5 sémantique, CSS3 et JavaScript Vanilla sans framework ni dépendance externe.

---

## 🌟 Fonctionnalités

- **Identité Visuelle Côtière & Marocaine** : Palette soignée (Bleu marine, Bleu Atlantique, Vert d'eau, Sable, Corail), typographies d'exception (*Cormorant Garamond*, *Montserrat*, *Noto Kufi Arabic*).
- **Navigation & Filtres Instantanés** : Recherche en temps réel, filtrage dynamique par catégories avec barre de défilement horizontal fluide et icônes SVG originales.
- **Support Bilingue Complet (FR / AR)** : Basculement instantané Français / Arabe avec support complet RTL (Right-to-Left).
- **Gestion des Favoris** : Sauvegarde locale (`localStorage`), compteur de badge et affichage dédié.
- **Panier & Commande WhatsApp** : Gestion des quantités, calcul automatique du sous-total et du total, génération du message formaté et redirection vers WhatsApp.
- **Modal Détails du Plat** : Vue détaillée avec photo haute définition, statut de disponibilité en cuisine et sélecteur de quantité.
- **Photos Gastronomiques Originales** : Images WebP de haute qualité prises sous éclairage naturel côtier sur vaisselle artisanale marocaine.
- **Performance & Accessibilité** : Chargement optimisé (`loading="lazy"`, préchargement hero), conformité WCAG AA, balises sémantiques et données structurées Schema.org JSON-LD.

---

## 📁 Structure du Projet

```text
azuria-qr-menu/
├── index.html          # Structure sémantique HTML5 & métadonnées SEO
├── style.css           # Stylesheet CSS3 moderne, variables & responsive design
├── script.js           # Moteur JavaScript (données, panier, favoris, i18n)
├── vercel.json         # Configuration de déploiement Vercel
├── README.md           # Documentation du projet
├── favicon.svg         # Logo favicon au format SVG
└── assets/
    └── images/         # Photos culinaires générées au format WebP
        ├── hero-azuria-seafood.webp
        ├── bar-roti-herbes.webp
        ├── paella-azuria.webp
        ├── calamars-grilles.webp
        ├── salade-marine.webp
        ├── huitres-atlantique.webp
        ├── tartare-thon.webp
        ├── soupe-poisson.webp
        ├── sardines-chermoula.webp
        ├── sole-meuniere.webp
        ├── brochettes-crevettes.webp
        ├── plateau-azuria.webp
        ├── salade-avocat-crevettes.webp
        ├── salade-marocaine.webp
        ├── fondant-chocolat.webp
        ├── cheesecake-citron.webp
        ├── the-menthe.webp
        └── jus-citron.webp
```

---

## 🚀 Comment Ouvrir le Site

1. **En Local (Directement)** :
   Double-cliquez simplement sur le fichier `index.html` ou ouvrez-le dans n'importe quel navigateur web moderne (Chrome, Safari, Firefox, Edge). Aucun serveur ni installation n'est requis.

2. **Avec un Serveur Local (Optionnel)** :
   ```bash
   # Avec Python
   python3 -m http.server 3000

   # Ou avec Node.js (npx serve)
   npx serve .
   ```

---

## ⚙️ Configuration & Personnalisation

Toutes les configurations clés se trouvent au début du fichier `script.js`.

### 1. Modifier les Informations du Restaurant & le Numéro WhatsApp

Ouvrez `script.js` et modifiez l'objet `RESTAURANT_CONFIG` :

```javascript
const RESTAURANT_CONFIG = {
  name: "AZURIA",
  whatsapp: "212600000000",                     // Numéro international sans le signe +
  phone: "+212 6 00 00 00 00",                  // Affichage formaté pour les clients
  address: "Corniche, Casablanca, Maroc",
  hours: "Tous les jours : 12h00 – 00h00",
  mapUrl: "https://maps.google.com/?q=Corniche+Casablanca+Morocco"
};
```

### 2. Ajouter ou Modifier des Plats du Menu

Dans `script.js`, modifiez ou enrichissez le tableau `MENU_DATA` :

```javascript
{
  id: 18,
  name: "Nouveau Plat",
  nameAr: "اسم الطبق بالعربية",
  category: "poissons",                         // entrees | poissons | grillades | salades | desserts | boissons
  categoryAr: "الأسماك",
  description: "Description en français.",
  descriptionAr: "وصف الطبق باللغة العربية.",
  price: 95,                                    // Prix en Dirhams (DH)
  image: "assets/images/mon-image.webp",
  popular: true,                                // true pour afficher le badge 'Populaire'
  available: true                               // Disponibilité en cuisine
}
```

### 3. Remplacer les Images

1. Placez votre nouvelle image au format WebP dans le dossier `assets/images/`.
2. Mettez à jour le chemin correspondant dans `MENU_DATA` dans `script.js`.
3. Dimensions recommandées :
   - Image Hero : 1920×1080 px (WebP, max 450 Ko)
   - Cartes du menu : 1200×900 px (WebP 4:3, max 250 Ko)

---

## 🌐 Déploiement sur Vercel & GitHub

1. **GitHub** :
   ```bash
   git init
   git add .
   git commit -m "Initial commit - AZURIA Digital QR Menu"
   git remote add origin https://github.com/votre-compte/azuria-qr-menu.git
   git push -u origin main
   ```

2. **Vercel** :
   - Connectez votre compte GitHub sur [Vercel](https://vercel.com).
   - Importez le dépôt `azuria-qr-menu`.
   - Cliquez sur **Deploy** (aucun Build Command nécessaire, le fichier `vercel.json` inclus assure le routage automatique).

---

## 📄 Licence & Crédits

© 2026 AZURIA — Poissons & Saveurs. Tous droits réservés.
