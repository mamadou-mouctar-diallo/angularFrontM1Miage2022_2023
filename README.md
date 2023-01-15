						PROJET ANGULAR: MASTER 1 MIAGE
 NOM des participants:
- DIALLO Mamadou Mouctar
- AZIMEDEM TSAOU Vedrine Stela

************************************************************************************************************************

PARTIE I- CONTEXTE DU PROJET: 
	Réaliser une application de gestion des devoir des étudiants.

************************************************************************************************************************

PARTIE II- COMMENT LANCER L'APPLICATION

II- 1) COMMENT LANCER L'APPLICATION EN LIGNE SUR VERSEL?
	Si vous souhaitez lancer l'application en ligne, suivez ces instructions:
	-lancer l'application qui a été hébergée sur "vercel" en suivant le lien: https://angular-front-m1-miage2022-2023-x84m.vercel.app
	- vous etes sur la page d'accueil de l'application: cliquer sur le bouton "connexion" en bleu, en haut à droite de votre écran. 
	- si vous souhaitez vous connecter en tant qu'Administrateur, utiliser les données suivantes:
		* adresse mail: professeur@yahoo.fr
		* Mot de passe: prof123
	- Si vous souhaitez vous connecter en tant qu'utilisateur CLASSIQUE, utilisez les données suivantes:
		* Adresse mail: professeurClassic@yahoo.fr
		* Mot de passe: classic123

II- 2) COMMENT LANCER L'APPLICATION EN LOCALHOST SUR VOTRE ORDINATEUR?
	Si vous souhaitez lancer l'application en localHost, suivez ces instructions:

1) étape 1: Récupération du projet sur git
	a) créer dans son ordinateur, dans un répertoire de son choix un nouveau répertoire nommé: "ProjetAngular2023" ( Vous pouvez le nommer comme vous le souhaitez)
	b) - Récupérer dans git le back-end du projet (le dossier "backendM1Miage2022_2023") avec la commande git clone https://github.com/mamadou-mouctar-diallo/backendM1Miage2022_2023.git
	   - Placer le dossier "backendM1Miage2022_2023" dans le répertoire "ProjetAngular2023" créé au point a)
	c) - Récupérer dans github le front-end du projet (le dossier "angularFrontM1Miage2022_2023") avec la commande git clone https://github.com/mamadou-mouctar-diallo/angularFrontM1Miage2022_2023.git
	   - Placer le dossier "angularFrontM1Miage2022_2023" dans le répertoire "ProjetAngular2023" créé au point a)

2) étape 2: lancer le projet dans son environnement de travail ( Dans notre cas, nous avons utilisé "IntelliJ IDEA" : https://www.jetbrains.com/idea/promo/)
	a) une fois les 2 dossiers récuperés sur git, ouvrir son envoronnemet de travail ( nous avons utilisé "IntelliJ IDEA")
      b) Se positionner sur le répertoire "ProjetAngular2023" et ouvrir les deux dossiers "backendM1Miage2022_2023" et "angularFrontM1Miage2022_2023" dans son environnement de travail
	c) pour lancer le back-end de l'application: 
		* se positionner sur le répertoire "backendM1Miage2022_2023" à l'aide de la commande "cd backendM1Miage2022_2023"
		* Lancer le backend à l'aide de la commande: "npm run dev" 
		* Ainsi, le serveur sera démarré

	d) Pour lancer le front-end de l'application: 
		* Se positionner sur le répertoire "angularFrontM1Miage2022_2023" à l'aide de la commande: "cd angularFrontM1Miage2022_2023"
		* Lancer le frontend à l'aide de la comande: "npm run ng serve ou ng serve"
		* Ainsi, vous pourrez ouvrir l'application en local si vous le souhaitez

II- 3) TUTORIEL POUR LE FONCTIONNEMENT DE L?APPLICATION:	
Une fois que vous avez accès à l'application:
	- suivez ce mini tutoriel vidéo afin de voir le fonctionnement de l'application: https://youtu.be/BuxbK9BLd0c
	- vous pouvez également trouver les explications sur les différentes fonctionnalités du projet dans la suite de ce document(PARTIE III- DIFFERENTES FONCTIONNALITES DU PROJET)


*************************************************************************************************************************
PARTIE III- DIFFERENTES FONCTIONNALITES DU PROJET:
 
1) l'Autentification: 
	- Un utilisateur peut s'authentifier dans l'application en entrant son adresse mail et son mot de passe attribué
	- Si l'utilisateur n'est pas autentifié, il a uniquement accès au "Dashbord" présentant la liste des devoirs en clquant sur "Accueil"

**************

2) La visualisation du dashboard:
Lorsque l'utilisateur est autentifié, il a la possibilité:
	- de cliqué sur l'onglet "Dashboard" de la barre de menu à gauche de l'écran afin de visualiser tous les devoir et leurs photos,
	- il peut également cliquer sur le bouton "détail" afin de visualiser les détails du devoir (le nom, date de rendu, la photo de l'enseignant, si il est rendu ou non, et la note)
	- après avoir cliqué sur détail, il peut également cliquer sur le bouton "rendre" qui apparait en vert et ainsi il aura rendu le devoir.
	- Sur le dashboard, l'Utilisateur peut également trié les devoirs en affichant uniquement ceux qui ont été rendus ou non.

***************

3) La gestion des utilisateur:
On distingue deux type d'utilisateurs: Les Admin et les utilisateurs Classic
	* Un utilisateur ADMIN peut:
		- Ajouter, modifier et supprimer des utilisateur
		- Ajouter, modifier et supprimer des devoirs
		- voir les détails des devoir sur le Dashboard
		- Visualiser et modifier son profil
	* Un utilisateur de type CLASSIC peut:
		- Modifier des devoir,
		- Ajouter des devoirs, 
		- Visualiser et modifier son profil

	* L'onglet "Gestion Utilisateur" est présent à gauche sur la barre de menu et nous permet d'acceder au tableau contenant tous les utilisateurs.
      NOTA BENE: Cet onglet n'est accessible qu'aux utilisateurs de type ADMIN

****************

4) La gestion des devoirs: 
L'onglet "Gestion Devoir" présent à gauche sur la barre de menu permet d'acceder au tableau contenant tous les devoirs présents dans l'application.
En accedant à cet onglet, on peut:
	- Ajouter un devoir en cliquant sur le bouton vert "Ajouter devoir"
	- Modifier un devoir en cliquant sur le bouton vert prèsentant un stylo sur chaque ligne de devoir
	- Supprimer un devoir en cliquant sur l'icone rouge de la boubelle sur la ligne de chaque devoir.

****************

5) La visualisation du profile:
Un utilisateur peut accéder à son profile en cliquant sur le bouton "profile" en haut à droite de la page. il porra ainsi:
	- Visualiser ses informations personnelles : son nom, son adresse mail, et son role (ADMIN ou CLASSIC)
	- Modifier ses informations en cliquant sur le bouton "edit" qui s'affiche en bas à droite de la oite de dialogue
	- Une fois qu'il a rempli les nouvelles information, il peu alors cliquer sur "Enregistrer" pour sauvegarder ou sur "cancel" pour annuler.

*************

6) La déconnexion:
Un utilisateur peut se déconnecter en cliquant sur le bouton rouge "déconnexion" en haut et à droite de la page. il sera alors déconnecté.
