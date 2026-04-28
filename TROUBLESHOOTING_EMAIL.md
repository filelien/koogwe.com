# Guide de dépannage - Envoi d'emails KOOGWE

## Problème : Les emails ne sont pas reçus à koogwe@outlook.fr

### Vérifications à faire :

1. **Vérifier que le serveur SMTP est démarré**
   ```bash
   npm run server
   ```
   Vous devriez voir :
   ```
   🚀 Serveur SMTP démarré sur le port 3001
   📧 Configuration SMTP: ✅ Configuré
   📬 Emails seront envoyés à: koogwe@outlook.fr
   ```

2. **Tester l'envoi d'email**
   ```bash
   npm run test:email
   ```
   Ce script enverra un email de test à koogwe@outlook.fr

3. **Vérifier la configuration Gmail**

   Pour Gmail, vous devez :
   - ✅ Avoir activé la validation en 2 étapes
   - ✅ Avoir généré un "Mot de passe d'application"
   - ✅ Utiliser ce mot de passe dans `server/.env` (pas votre mot de passe normal)

   **Comment générer un mot de passe d'application Gmail :**
   1. Allez sur https://myaccount.google.com/
   2. Sécurité → Validation en 2 étapes (doit être activée)
   3. En bas de la page → Mots de passe des applications
   4. Sélectionnez "Autre" et nommez-le "KOOGWE"
   5. Copiez le mot de passe généré (16 caractères)
   6. Utilisez-le dans `server/.env` comme `SMTP_PASSWORD`

4. **Vérifier les spams**
   - Les emails peuvent arriver dans le dossier Spam/Indésirables
   - Vérifiez aussi le dossier "Autres" dans Outlook

5. **Vérifier les logs du serveur**
   Quand vous envoyez un message depuis le formulaire, vous devriez voir dans la console :
   ```
   📤 Tentative d'envoi d'email...
      Destinataire: koogwe@outlook.fr
      Expéditeur: filelien08@gmail.com
      Sujet: [KOOGWE Contact] ...
   
   ✅ Email envoyé avec succès!
   📧 Message ID: ...
   ```

6. **Tester la connexion SMTP**
   Le serveur vérifie automatiquement la connexion au démarrage. Si vous voyez :
   ```
   ❌ Erreur de vérification SMTP: ...
   ```
   Il y a un problème de configuration.

### Configuration actuelle

- **SMTP Host:** smtp.gmail.com
- **Port:** 587
- **User:** filelien08@gmail.com
- **Destinataire:** koogwe@outlook.fr (TOUJOURS cette adresse)

### Solutions possibles

1. **Si l'email n'est pas envoyé :**
   - Vérifiez que le mot de passe d'application Gmail est correct
   - Vérifiez que la validation en 2 étapes est activée
   - Vérifiez les logs d'erreur dans la console

2. **Si l'email est envoyé mais pas reçu :**
   - Vérifiez le dossier Spam
   - Vérifiez que koogwe@outlook.fr est la bonne adresse
   - Attendez quelques minutes (parfois il y a un délai)

3. **Si vous voyez une erreur d'authentification :**
   - Régénérez le mot de passe d'application Gmail
   - Mettez à jour `SMTP_PASSWORD` dans `server/.env`
   - Redémarrez le serveur

### Test rapide

Pour tester rapidement, exécutez :
```bash
npm run test:email
```

Cela enverra un email de test directement à koogwe@outlook.fr.

