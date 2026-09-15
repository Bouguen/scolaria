# SCOLAR·IA — Portail pour les enseignants du secondaire au Maroc

## Utilisation

252 fiches : 53 outils et ressources complémentaires, 52 prompts, 16 tutoriels, 26 scénarios, 50 guides (dont 15 activités élèves, 15 fiches de droit et 10 méthodes d’évaluation), 33 notions et 22 références. S’y ajoutent 11 espaces disciplinaires, 5 niveaux de formation, 10 modules, un diagnostic, 6 exercices de vérification, 10 repères marocains et 5 PDF A4.

Ouvrir le portail avec `Ouvrir-SCOLARIA.cmd` (Node.js requis). Conserver la fenêtre du serveur ouverte. L’adresse locale stable est http://127.0.0.1:8768/ ; elle permet de retrouver le stockage du navigateur. Si le port est déjà utilisé, fermer le serveur précédent. L’ouverture directe des pages sans serveur ne permet pas les fonctions interactives.

## Fichiers principaux

- `content/source-originale.json` : données d’origine conservées.
- `content/catalogue.cjs` : fiches existantes et leurs sources.
- `content/scolaria.cjs` : nouveaux prompts, scénarios, activités, droit et évaluation.
- `content/concepts.cjs` : notions enrichies avec limites, risques et repères.
- `content/formation.cjs` : modules et quiz.
- `brand.cjs` : identité, navigation et accueil.
- `pages.cjs` : modèles de fiches et fonctionnalités préservées.
- `scolaria-pages.cjs` : nouveaux espaces, métadonnées et index transversal.
- `dist/app.js` : recherche, filtres, favoris, comparaison et parcours existants.
- `dist/scolaria.js` : générateur, diagnostic, formation, collections et espace local.
- `dist/style.css`, `dist/refinements.css`, `dist/scolaria.css` : présentation adaptative.
- `dist/assets/` : les deux images de marque fournies, conservées sans modification.
- `dist/documents/` : PDF A4 et pages imprimables.
- `vercel.json` : construction et publication du dossier `dist/` sur Vercel.

## Mettre à jour

1. Modifier les données et les modèles concernés, en conservant les identifiants des fiches.
2. Séparer la date de révision éditoriale et la date de consultation réelle de la source.
3. Ne pas transformer une vérification HTTP en validation du contenu ou en test pédagogique.
4. Indiquer « Information non documentée » pour toute condition non établie.
5. Générer avec `node build.cjs` puis servir `dist/` et contrôler les modifications.
6. Les PDF sont des fichiers livrés ; une modification des textes correspondants nécessite aussi de les régénérer et de les vérifier visuellement.
7. Publier dans un dépôt GitHub et un projet Vercel dédiés à SCOLAR·IA, sur les comptes choisis par le propriétaire, distincts de ceux d’artdaci.

## Publication GitHub et Vercel

Créer un dépôt dédié `scolaria-portail`, puis l’importer comme nouveau projet dans le compte Vercel choisi. Les réglages sont inclus : `npm run build`, sortie `dist`, Node.js 22. Les ressources CSS, JavaScript, images et PDF du dossier `dist` doivent être conservées dans le dépôt : elles font partie des sources livrées.

L’adresse de production Vercel sert automatiquement aux liens canoniques et au plan du site. La variable facultative `SCOLARIA_SITE_URL` permet de définir un domaine personnalisé. [Documentation Vercel](https://vercel.com/docs/environment-variables/system-environment-variables).

Le dossier `.openai` est un ancien rattachement local à Sites ; il est exclu du paquet GitHub/Vercel. Les dossiers `.git` et `.vercel`, les secrets et les journaux sont également exclus de ce paquet. Aucun projet artdaci ne doit être sélectionné lors de la publication.

## Données et langues

Les anciennes clés locales `manar:` sont conservées pour retrouver les favoris et parcours. Les nouvelles fonctions utilisent `scolaria:`. Les deux sont incluses dans l’export de Mon espace et dans l’effacement volontaire. Le stockage dépend du navigateur et de l’adresse : local et site publié ont des espaces distincts. L’export JSON est une sauvegarde lisible ; l’import automatique n’est pas encore proposé.

Le français est complet. L’accueil et un guide en arabe sont partiels, avec RTL ; l’anglais dispose d’une introduction. Les liens vers les ressources françaises sont signalés. Les fiches possèdent un emplacement pour de futures traductions validées.

## Périmètre et limites

Portail éditorial indépendant : aucune homologation, accréditation ou efficacité clinique/pédagogique n’est revendiquée. Les cinq niveaux constituent une autoformation, sans certification. Les activités doivent être adaptées aux programmes effectivement enseignés.

L’indice des outils publie une méthode et des états « non évalué », sans notes arbitraires. Les prix, âges, langues et conditions non établis restent explicites. Les conditions en compte et la conformité d’un usage réel au Maroc nécessitent leur propre examen.

Veille mise à jour manuellement. Contributions exportées en fichier, sans envoi. Pas de comptes, synchronisation, CMS ni API IA connectée. Le générateur assemble un prompt localement. Aucun traceur publicitaire ajouté.

Les documents et supports imprimés fonctionnent hors ligne. Les services externes gardent leurs propres conditions et nécessitent généralement Internet. Le mode sobre simplifie l’affichage ; ce n’est pas un cache hors ligne du Web.

## Vérifications

Identifiants, liens locaux, métadonnées, scripts et fichiers PDF contrôlés. Tests navigateur : formulaire incomplet, génération et sauvegarde, collections persistantes, quiz correct/incorrect, progression, deux profils de diagnostic, six exercices de vérification, recherche transversale, menu mobile et RTL. Le rapport de livraison détaille les contrôles et les accès externes non confirmés.
