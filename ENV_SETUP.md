# Configuration des Variables d'Environnement pour KOOGWE

Ce document explique comment configurer les variables d'environnement nécessaires au bon fonctionnement de l'application KOOGWE, notamment pour les services de cartographie et d'envoi d'emails.

## Fichier `.env`

Pour des raisons de sécurité et de flexibilité, les clés API et autres configurations sensibles sont gérées via des variables d'environnement. Vous devez créer un fichier nommé `.env` à la racine de votre projet.

### Contenu du fichier `.env`

Copiez le contenu suivant dans votre fichier `.env` et remplacez les valeurs par vos propres clés API :

```env
# Supabase
VITE_SUPABASE_URL="YOUR_SUPABASE_URL"
VITE_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"

# Mapbox (pour le géocodage)
VITE_MAPBOX_TOKEN="YOUR_MAPBOX_TOKEN"
EXPO_PUBLIC_MAPBOX_TOKEN="YOUR_MAPBOX_TOKEN"

# Google Maps (pour le géocodage, en fallback ou alternative)
VITE_GOOGLE_MAPS_KEY="YOUR_GOOGLE_MAPS_KEY"
EXPO_PUBLIC_GOOGLE_MAPS_KEY="YOUR_GOOGLE_MAPS_KEY"

# OSRM (pour le calcul d'itinéraire)
VITE_OSRM_ENDPOINT="https://router.project-osrm.org"
EXPO_PUBLIC_OSRM_ENDPOINT="https://router.project-osrm.org"

# API SMTP (recommandé - pour l'envoi d'emails depuis le formulaire de contact)
# URL de votre serveur backend SMTP
VITE_API_URL="http://localhost:3001"

# EmailJS (optionnel - alternative à SMTP)
# Si SMTP et EmailJS ne sont pas configurés, le formulaire utilisera mailto: comme fallback
VITE_EMAILJS_SERVICE_ID="YOUR_EMAILJS_SERVICE_ID"
VITE_EMAILJS_TEMPLATE_ID="YOUR_EMAILJS_TEMPLATE_ID"
VITE_EMAILJS_PUBLIC_KEY="YOUR_EMAILJS_PUBLIC_KEY"
```

### Explication des variables

-   **`VITE_SUPABASE_URL`** et **`VITE_SUPABASE_ANON_KEY`** : Ces variables sont utilisées pour connecter l'application à votre projet Supabase. Elles sont essentielles pour récupérer les données des partenaires et des véhicules.
-   **`VITE_MAPBOX_TOKEN`** et **`EXPO_PUBLIC_MAPBOX_TOKEN`** : Votre jeton d'accès Mapbox. Utilisé pour le géocodage (convertir une adresse en coordonnées géographiques). Le préfixe `EXPO_PUBLIC_` est inclus pour la compatibilité avec les projets Expo/React Native si l'application est étendue.
-   **`VITE_GOOGLE_MAPS_KEY`** et **`EXPO_PUBLIC_GOOGLE_MAPS_KEY`** : Votre clé API Google Maps. Utilisée comme alternative ou fallback pour le géocodage.
-   **`VITE_OSRM_ENDPOINT`** et **`EXPO_PUBLIC_OSRM_ENDPOINT`** : L'URL du service OSRM pour le calcul d'itinéraires. Par défaut, il pointe vers le service public de Project OSRM.
-   **`VITE_API_URL`** : (Recommandé) URL de votre serveur backend SMTP. Le formulaire de contact essaiera d'utiliser cette API en priorité pour envoyer les emails. Voir `SMTP_SETUP.md` pour la configuration complète du serveur SMTP.
-   **`VITE_EMAILJS_SERVICE_ID`**, **`VITE_EMAILJS_TEMPLATE_ID`** et **`VITE_EMAILJS_PUBLIC_KEY`** : (Optionnel) Configuration pour EmailJS permettant d'envoyer des emails directement depuis le formulaire de contact. Utilisé en second choix si l'API SMTP n'est pas disponible. Si ni SMTP ni EmailJS ne sont configurés, le formulaire utilisera automatiquement `mailto:` comme solution de repli.

### Configuration SMTP (Recommandé)

Pour utiliser un serveur SMTP directement (solution la plus professionnelle) :

1. Consultez le guide complet dans `SMTP_SETUP.md`
2. Créez un fichier `server/.env` avec vos identifiants SMTP
3. Démarrez le serveur avec `npm run server` ou `npm run dev:full`
4. Configurez `VITE_API_URL` dans votre `.env` frontend

**Avantages** :
- Contrôle total sur l'envoi d'emails
- Pas de dépendance à des services tiers
- Meilleure sécurité (credentials côté serveur)
- Emails professionnels avec votre propre domaine

### Configuration EmailJS (Alternative)

Si vous préférez utiliser EmailJS (service tiers) :

1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Créez un service email (Gmail, Outlook, etc.)
3. Créez un template d'email avec les variables suivantes :
   - `{{from_name}}` : Nom de l'expéditeur
   - `{{from_email}}` : Email de l'expéditeur
   - `{{phone}}` : Téléphone (optionnel)
   - `{{subject}}` : Sujet du message
   - `{{message}}` : Contenu du message
   - `{{to_email}}` : Email de destination (koogwe@outlook.fr)
4. Récupérez votre Service ID, Template ID et Public Key depuis votre tableau de bord EmailJS
5. Ajoutez-les dans votre fichier `.env`

**Note** : Le formulaire de contact essaie d'envoyer les emails dans cet ordre :
1. API SMTP (si `VITE_API_URL` est configuré)
2. EmailJS (si les clés sont configurées)
3. `mailto:` (fallback - ouvre le client email de l'utilisateur)

### Accès aux variables dans le code

Dans les composants React, vous pouvez accéder à ces variables via `import.meta.env.VITE_NOM_DE_LA_VARIABLE`.

Assurez-vous que ces variables sont correctement configurées pour que les fonctionnalités de cartographie, de simulation de trajet et de contact fonctionnent comme prévu.
