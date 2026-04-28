# Configuration SMTP pour KOOGWE

Ce guide explique comment configurer un serveur SMTP pour gérer l'envoi d'emails depuis le formulaire de contact.

## Pourquoi utiliser SMTP ?

Un serveur SMTP permet d'envoyer des emails directement depuis votre backend, offrant :
- ✅ Contrôle total sur l'envoi d'emails
- ✅ Pas de dépendance à des services tiers (EmailJS)
- ✅ Meilleure sécurité (credentials côté serveur)
- ✅ Emails professionnels avec votre propre domaine

## Installation

1. **Installer les dépendances** :
```bash
npm install
```

2. **Créer le fichier de configuration** :
```bash
cp server/.env.example server/.env
```

3. **Configurer les variables SMTP** dans `server/.env` :

### Configuration pour Outlook/Office 365

```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=koogwe@outlook.fr
SMTP_PASSWORD=votre_mot_de_passe
CONTACT_EMAIL=koogwe@outlook.fr
```

### Configuration pour Gmail

Pour Gmail, vous devez utiliser un "Mot de passe d'application" :

1. Allez dans votre compte Google → Sécurité
2. Activez la validation en 2 étapes
3. Générez un "Mot de passe d'application"
4. Utilisez ce mot de passe dans la configuration :

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=votre_email@gmail.com
SMTP_PASSWORD=votre_mot_de_passe_app
CONTACT_EMAIL=koogwe@outlook.fr
```

### Configuration pour un serveur SMTP personnalisé

```env
SMTP_HOST=smtp.votre-domaine.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=noreply@votre-domaine.com
SMTP_PASSWORD=votre_mot_de_passe
CONTACT_EMAIL=koogwe@outlook.fr
```

## Démarrage

### Option 1 : Serveur seul
```bash
npm run server
```

### Option 2 : Frontend + Backend ensemble
```bash
npm run dev:full
```

Le serveur SMTP démarrera sur `http://localhost:3001` par défaut.

## Configuration du Frontend

Dans votre fichier `.env` à la racine du projet, ajoutez :

```env
# URL de l'API SMTP
VITE_API_URL=http://localhost:3001
```

Pour la production, remplacez par l'URL de votre serveur déployé :
```env
VITE_API_URL=https://api.koogwe.app
```

## Ordre de priorité

Le formulaire de contact essaie d'envoyer les emails dans cet ordre :

1. **API SMTP** (si `VITE_API_URL` est configuré et le serveur est disponible)
2. **EmailJS** (si les clés EmailJS sont configurées)
3. **mailto:** (fallback - ouvre le client email de l'utilisateur)

## Test

Pour tester que le serveur SMTP fonctionne :

```bash
curl http://localhost:3001/api/health
```

Vous devriez voir :
```json
{
  "status": "ok",
  "service": "KOOGWE Contact API",
  "smtpConfigured": true
}
```

## Déploiement

### Sur Vercel / Netlify (Frontend)

Le frontend peut être déployé normalement. Assurez-vous d'ajouter `VITE_API_URL` dans les variables d'environnement.

### Sur Railway / Render / Heroku (Backend)

1. Déployez le dossier `server/` comme application Node.js
2. Ajoutez toutes les variables d'environnement SMTP
3. Configurez `FRONTEND_URL` avec l'URL de votre frontend déployé
4. Mettez à jour `VITE_API_URL` dans le frontend avec l'URL de votre backend

## Sécurité

⚠️ **Important** :
- Ne commitez jamais le fichier `server/.env` dans Git
- Utilisez des variables d'environnement sécurisées en production
- Activez HTTPS pour les communications entre frontend et backend
- Limitez les requêtes avec un rate limiter en production

## Dépannage

### Erreur "SMTP non configuré"
- Vérifiez que toutes les variables SMTP sont définies dans `server/.env`
- Vérifiez que le fichier `.env` est bien dans le dossier `server/`

### Erreur d'authentification
- Vérifiez vos identifiants SMTP
- Pour Gmail, utilisez un mot de passe d'application
- Pour Outlook, assurez-vous que la validation en 2 étapes est configurée correctement

### CORS Error
- Vérifiez que `FRONTEND_URL` dans `server/.env` correspond à l'URL de votre frontend
- En développement : `http://localhost:5173`
- En production : `https://votre-domaine.com`





