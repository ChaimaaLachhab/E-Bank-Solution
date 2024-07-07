# E-Bank-Solution

Ce projet constitue le backend de l'application e-bank de Bank Solutions, permettant la gestion des comptes bancaires, des transactions et des cartes.

## Fonctionnalités

L'application e-Banking permet la gestion des comptes bancaires et des transactions financières. Voici ses principales fonctionnalités :

- Gestion des utilisateurs, des comptes et des bénéficiaires.
- Création, mise à jour et suppression des comptes bancaires.
- Gestion des cartes bancaires, y compris l'activation, la désactivation et le blocage.
- Réalisation de transferts internes et externes entre comptes.
- Gestion des exceptions liées aux opérations bancaires.

## Structure du Projet

Le projet est structuré comme suit :

- `src/main/java/ebank`: Contient les classes principales de l'application.
- `src/test/java/ebank`: Contient les tests unitaires.
- `UML`: Contient les diagrammes UML de conception.

# Les Classes de l'Application e-Banking

## Account

**Objectif** : Représente un compte bancaire d'un utilisateur.

**Attributs** :
- `id` (type `Long`): Identifiant unique du compte (généré automatiquement).
- `accountNumber` (type `String`): Numéro du compte.
- `accountType` (type `AccountType`): Type de compte (ex: épargne, courant).
- `balance` (type `double`): Solde actuel du compte.
- `dateCreation` (type `Date`): Date de création du compte.
- `accountClosed` (type `Boolean`): Indique si le compte est fermé.
- `raisonClosing` (type `String`): Raison de la fermeture du compte.
- `user` (type `User`): Utilisateur propriétaire du compte.
- `transactions` (type `List<Transaction>`): Liste des transactions associées à ce compte.
- `bankCards` (type `List<BankCard>`): Liste des cartes bancaires associées à ce compte.
- `beneficiaries` (type `List<Beneficiary>`): Liste des bénéficiaires associés à ce compte.

## BankCard

**Objectif** : Représente une carte bancaire associée à un compte.

**Attributs** :
- `id` (type `Long`): Identifiant unique de la carte bancaire (généré automatiquement).
- `cardNumber` (type `String`): Numéro de la carte bancaire.
- `expirationDate` (type `String`): Date d'expiration de la carte.
- `cardType` (type `CardType`): Type de carte bancaire (ex: Visa, MasterCard).
- `status` (type `Status`): État actuel de la carte (activée, désactivée, bloquée).
- `blockRaison` (type `String`): Raison du blocage de la carte.
- `account` (type `Account`): Compte auquel la carte est associée.

## Beneficiary

**Objectif** : Représente un bénéficiaire pour les transferts externes.

**Attributs** :
- `id` (type `Long`): Identifiant unique du bénéficiaire (généré automatiquement).
- `name` (type `String`): Nom du bénéficiaire.
- `rib` (type `String`): Identifiant international du compte du bénéficiaire.
- `bankName` (type `BankName`): Nom de la banque du bénéficiaire.
- `account` (type `Account`): Compte auquel le bénéficiaire est associé.
- `transactions` (type `List<Transaction>`): Liste des transactions effectuées avec ce bénéficiaire.

## Transaction

**Objectif** : Représente une transaction financière entre comptes.

**Attributs** :
- `id` (type `Long`): Identifiant unique de la transaction (généré automatiquement).
- `transactionDate` (type `Date`): Date de la transaction.
- `amount` (type `Double`): Montant de la transaction.
- `transactionType` (type `TransactionType`): Type de transaction (dépôt, retrait, transfert).
- `description` (type `String`): Description de la transaction.
- `transferType` (type `TransferType`): Type de transfert (interne, externe).
- `targetAccountNumber` (type `String`): Numéro de compte destinataire pour les transferts.
- `account` (type `Account`): Compte associé à la transaction.
- `beneficiary` (type `Beneficiary`): Bénéficiaire associé à la transaction (pour les transferts externes).

## User

**Objectif** : Représente un utilisateur de l'application e-Banking.

**Attributs** :
- `id` (type `Long`): Identifiant unique de l'utilisateur (généré automatiquement).
- `name` (type `String`): Nom de l'utilisateur.
- `phone` (type `String`): Numéro de téléphone de l'utilisateur.
- `address` (type `String`): Adresse de l'utilisateur.
- `city` (type `String`): Ville de résidence de l'utilisateur.
- `accounts` (type `List<Account>`): Liste des comptes bancaires associés à cet utilisateur.

# Les Énumérations de l'Application e-Banking

## AccountType

**Objectif** : Représente le type de compte bancaire.

**Valeurs** :
- `CURRENT` : Compte courant.
- `SAVING` : Compte d'épargne.

## BankName

**Objectif** : Représente le nom d'une banque.

**Valeurs** :
- `CIH`
- `BMCE`
- `ATTIJARI`
- `CREDIT_AGRICOLE`
- `CERDIT_DU_MAROC`
- `OUMNIA_BANK`
- `BANK_POPULAIRE`

## CardType

**Objectif** : Représente le type de carte bancaire.

**Valeurs** :
- `CREDIT` : Carte de crédit.
- `DEBIT` : Carte de débit.

## Status

**Objectif** : Représente l'état d'une carte bancaire.

**Valeurs** :
- `ACTIVATE` : Carte activée.
- `DEACTIVATE` : Carte désactivée.
- `BLOCK` : Carte bloquée.

## TransactionType

**Objectif** : Représente le type de transaction financière.

**Valeurs** :
- `CREDIT` : Transaction de crédit (dépôt).
- `DEBIT` : Transaction de débit (retrait).

## TransferType

**Objectif** : Représente le type de transfert de fonds.

**Valeurs** :
- `INTERNAL` : Transfert interne entre comptes de même utilisateur.
- `EXTERNAL` : Transfert externe vers un compte dans une autre banque.

# Les Exceptions de l'Application e-Banking

## AccountAlreadyExistsException

**Objectif** : Exception lancée lorsqu'un compte existe déjà dans le système.

## AccountClosedException

**Objectif** : Exception lancée lorsqu'une tentative est faite sur un compte fermé.

## AccountNotFoundException

**Objectif** : Exception lancée lorsqu'un compte n'est pas trouvé dans le système.

## BankCardNotFoundException

**Objectif** : Exception lancée lorsqu'une carte bancaire n'est pas trouvée dans le système.

## BankCardAlreadyBlockedException

**Objectif** : Exception lancée lorsqu'une tentative est faite pour bloquer une carte déjà bloquée.

## BeneficiaryNotFoundException

**Objectif** : Exception lancée lorsqu'un bénéficiaire n'est pas trouvé dans le système.

## BlockReasonEmptyException

**Objectif** : Exception lancée lorsqu'aucune raison n'est spécifiée pour bloquer une carte bancaire.

## CardAlreadyExistsException

**Objectif** : Exception lancée lorsqu'une tentative est faite pour créer une carte qui existe déjà.

## CardNotAllowedForSavingsException

**Objectif** : Exception lancée lorsqu'une carte de crédit est associée à un compte d'épargne, ce qui n'est pas autorisé.

## InsufficientBalanceException

**Objectif** : Exception lancée lorsqu'un utilisateur tente d'effectuer une transaction avec un solde insuffisant.

## NonZeroBalanceException

**Objectif** : Exception lancée lorsqu'un utilisateur tente de fermer un compte avec un solde non nul.

## UserNotFoundException

**Objectif** : Exception lancée lorsqu'un utilisateur n'est pas trouvé dans le système.

# Les Responsabilités des Méthode de l'Application e-Banking

## UserService

**Classe**: `UserService`

**Responsabilités**:

- Gère la logique métier liée aux utilisateurs, y compris la récupération, la création, la mise à jour et la suppression des utilisateurs.

**Méthodes**:

1. `getAllUsers()`

    - **Description**: Récupère tous les utilisateurs enregistrés dans le système.
    - **Paramètres**: Aucun.
    - **Valeur de retour**: Liste de `User` contenant tous les utilisateurs.

2. `getUserById(Long id)`

    - **Description**: Récupère un utilisateur par son identifiant unique.
    - **Paramètres**:
        - `id` (type `Long`): Identifiant unique de l'utilisateur à récupérer.
    - **Valeur de retour**: L'utilisateur correspondant à l'ID spécifié.

3. `saveUser(User user)`

    - **Description**: Enregistre un nouvel utilisateur dans la base de données.
    - **Paramètres**:
        - `user` (type `User`): Utilisateur à enregistrer.
    - **Valeur de retour**: L'utilisateur enregistré avec son ID généré.

4. `updateUser(Long id, User user)`

    - **Description**: Met à jour les informations d'un utilisateur existant.
    - **Paramètres**:
        - `id` (type `Long`): Identifiant unique de l'utilisateur à mettre à jour.
        - `user` (type `User`): Objet contenant les nouvelles informations de l'utilisateur.
    - **Valeur de retour**: L'utilisateur mis à jour.

5. `deleteUser(Long id)`

    - **Description**: Supprime un utilisateur existant de la base de données.
    - **Paramètres**:
        - `id` (type `Long`): Identifiant unique de l'utilisateur à supprimer.
    - **Valeur de retour**: Aucun (void).

## AccountService

**Classe**: `AccountService`

**Responsabilités**:

- Gère la logique métier des comptes bancaires, y compris la création, la récupération, la mise à jour, la suppression, et la fermeture des comptes.

**Méthodes**:

1. `getAllAccounts(Long userId)`

   - **Description**: Récupère tous les comptes associés à un utilisateur.
   - **Paramètres**:
      - `userId` (type `Long`): Identifiant unique de l'utilisateur.
   - **Valeur de retour**: Liste de `Account` contenant tous les comptes de l'utilisateur.

2. `createAccount(Long userId, Account account)`

   - **Description**: Crée un nouveau compte bancaire pour un utilisateur.
   - **Paramètres**:
      - `userId` (type `Long`): Identifiant unique de l'utilisateur pour lequel créer le compte.
      - `account` (type `Account`): Objet contenant les détails du compte à créer.
   - **Valeur de retour**: Le compte bancaire créé.

3. `getAccountBalance(Long accountId)`

   - **Description**: Récupère le solde d'un compte spécifique.
   - **Paramètres**:
      - `accountId` (type `Long`): Identifiant unique du compte.
   - **Valeur de retour**: Solde actuel du compte.

4. `closeAccount(Long accountId, String raisonClosing)`

   - **Description**: Ferme un compte bancaire spécifique.
   - **Paramètres**:
      - `accountId` (type `Long`): Identifiant unique du compte à fermer.
      - `raisonClosing` (type `String`): Raison de la fermeture du compte.
   - **Valeur de retour**: Aucun (void).

5. `updateAccount(Long accountId, Account account)`

   - **Description**: Met à jour les informations d'un compte bancaire existant.
   - **Paramètres**:
      - `accountId` (type `Long`): Identifiant unique du compte à mettre à jour.
      - `account` (type `Account`): Objet contenant les nouvelles informations du compte.
   - **Valeur de retour**: Le compte bancaire mis à jour.

6. `deleteAccount(Long accountId)`

   - **Description**: Supprime un compte bancaire spécifique.
   - **Paramètres**:
      - `accountId` (type `Long`): Identifiant unique du compte à supprimer.
   - **Valeur de retour**: Aucun (void).

7. `getAccountById(Long accountId)`

   - **Description**: Récupère un compte bancaire par son identifiant unique.
   - **Paramètres**:
      - `accountId` (type `Long`): Identifiant unique du compte à récupérer.
   - **Valeur de retour**: Le compte bancaire correspondant à l'ID spécifié.


## TransactionService

**Classe**: `TransactionService`

**Responsabilités**:

- Gère la logique métier des transactions financières, y compris les transferts internes et externes entre comptes.

**Méthodes**:

1. `getAccountTransactions(Long accountId)`

    - **Description**: Récupère toutes les transactions associées à un compte.
    - **Paramètres**:
        - `accountId` (type `Long`): Identifiant unique du compte.
    - **Valeur de retour**: Liste de `Transaction` contenant toutes les transactions du compte.

2. `createInternalTransfer(Long accountId, String toAccountNumber, Double amount, String description)`

    - **Description**: Effectue un transfert interne entre deux comptes du même utilisateur.
    - **Paramètres**:
        - `accountId` (type `Long`): Identifiant unique du compte source.
        - `toAccountNumber` (type `String`): Numéro de compte destinataire.
        - `amount` (type `Double`): Montant à transférer.
        - `description` (type `String`): Description du transfert.
    - **Valeur de retour**: Aucun (void).

3. `createExternalTransfer(Long accountId, String rib, BankName bankName, Double amount, String description)`

    - **Description**: Effectue un transfert externe vers un compte dans une autre banque.
    - **Paramètres**:
        - `accountId` (type `Long`): Identifiant unique du compte source.
        - `rib` (type `String`): Identifiant international du bénéficiaire.
        - `bankName` (type `BankName`): Nom de la banque du bénéficiaire.
        - `amount` (type `Double`): Montant à transférer.
        - `description` (type `String`): Description du transfert.
    - **Valeur de retour**: Aucun (void).

## BeneficiaryService

**Classe**: `BeneficiaryService`

**Responsabilités**:

- Gère la logique métier des bénéficiaires, y compris la récupération, la création, la mise à jour et la suppression des bénéficiaires pour les transferts externes.

**Méthodes**:

1. `getAllBeneficiaries(Long accountId)`

    - **Description**: Récupère tous les bénéficiaires enregistrés pour un compte spécifique.
    - **Paramètres**:
        - `accountId` (type `Long`): Identifiant unique du compte.
    - **Valeur de retour**: Liste de `Beneficiary` contenant tous les bénéficiaires du compte.

2. `getBeneficiaryById(Long id)`

    - **Description**: Récupère un bénéficiaire par son identifiant unique.
    - **Paramètres**:
        - `id` (type `Long`): Identifiant unique du bénéficiaire à récupérer.
    - **Valeur de retour**: Le bénéficiaire correspondant à l'ID spécifié.

3. `saveBeneficiary(Beneficiary beneficiary)`

    - **Description**: Enregistre un nouveau bénéficiaire dans la base de données.
    - **Paramètres**:
        - `beneficiary` (type `Beneficiary`): Bénéficiaire à enregistrer.
    - **Valeur de retour**: Le bénéficiaire enregistré avec son ID généré.

4. `updateBeneficiary(Long accountId, Beneficiary beneficiary)`

    - **Description**: Met à jour les informations d'un bénéficiaire existant.
    - **Paramètres**:
        - `accountId` (type `Long`): Identifiant unique du compte auquel le bénéficiaire est associé.
        - `beneficiary` (type `Beneficiary`): Objet contenant les nouvelles informations du bénéficiaire.
    - **Valeur de retour**: Le bénéficiaire mis à jour.

5. `deleteBeneficiary(Long id)`

    - **Description**: Supprime un bénéficiaire existant de la base de données.
    - **Paramètres**:
        - `id` (type `Long`): Identifiant unique du bénéficiaire à supprimer.
    - **Valeur de retour**: Aucun (void).

## BankCardService

**Classe**: `BankCardService`

**Responsabilités**:

- Gère la logique métier des cartes bancaires, y compris la création, la gestion de l'état (activation/désactivation/blocage) et la récupération des cartes associées à un compte.

**Méthodes**:

1. `getAllBankCards(Long accountId)`

    - **Description**: Récupère toutes les cartes bancaires associées à un compte.
    - **Paramètres**:
        - `accountId` (type `Long`): Identifiant unique du compte.
    - **Valeur de retour**: Liste de `BankCard` contenant toutes les cartes bancaires du compte.

2. `addDefaultBankCard(Account account)`

    - **Description**: Ajoute une carte bancaire par défaut à un nouveau compte.
    - **Paramètres**:
        - `account` (type `Account`): Compte auquel ajouter la carte bancaire.
    - **Valeur de retour**: La carte bancaire ajoutée.

3. `addBankCard(Long accountId, BankCard bankCard)`

    - **Description**: Ajoute une nouvelle carte bancaire à un compte existant.
    - **Paramètres**:
        - `accountId` (type `Long`): Identifiant unique du compte auquel ajouter la carte bancaire.
        - `bankCard` (type `BankCard`): Objet contenant les détails de la carte bancaire à ajouter.
    - **Valeur de retour**: La carte bancaire ajoutée.

4. `activateOrDeactivateBankCard(Long bankCardId, boolean activate)`

    - **Description**: Active ou désactive une carte bancaire existante.
    - **Paramètres**:
        - `bankCardId` (type `Long`): Identifiant unique de la carte bancaire à activer/désactiver.
        - `activate` (type `boolean`): True pour activer, false pour désactiver.
    - **Valeur de retour**: La carte bancaire mise à jour.

5. `blockBankCard(Long bankCardId, String blockRaison)`

    - **Description**: Bloque une carte bancaire en cas de perte ou de vol.
    - **Paramètres**:
        - `bankCardId` (type `Long`): Identifiant unique de la carte bancaire à bloquer.
        - `blockRaison` (type `String`): Raison du blocage de la carte.
    - **Valeur de retour**: La carte bancaire bloquée.

## Instructions d'Utilisation

### Gestion des Utilisateurs

- Endpoint pour récupérer tous les utilisateurs : `GET /api/users`
- Endpoint pour créer un utilisateur : `POST /api/users`
- Endpoint pour mettre à jour un utilisateur : `PUT /api/users/{id}`
- Endpoint pour supprimer un utilisateur : `DELETE /api/users/{id}`

### Gestion des Comptes

- Endpoint pour récupérer tous les comptes : `GET /api/accounts`
- Endpoint pour créer un compte : `POST /api/accounts`
- Endpoint pour mettre à jour un compte : `PUT /api/accounts/{id}`
- Endpoint pour fermer un compte : `DELETE /api/accounts/{id}`

### Gestion des Transactions

- Endpoint pour effectuer un transfert interne : `POST /api/transactions/internal`
- Endpoint pour effectuer un transfert externe : `POST /api/transactions/external`

## Utilisation

Pour utiliser l'application :

1. Lancez l'application depuis votre IDE ou en ligne de commande.
2. Utilisez un outil comme Postman pour tester les API exposées.
3. Suivez les instructions d'utilisation pour gérer les comptes, effectuer des transactions, etc.


## Technologies Utilisées

L'application utilise les technologies suivantes :

- Java JDK 21
- Spring Boot 2.5.4
- Spring Data JPA pour l'accès aux données
- Spring MVC pour la gestion des requêtes HTTP
- MySQL comme base de données relationnelle
- Junit & Mockito pour les tests

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- Java JDK 21
- MySQL Server
- Un IDE compatible avec Java et Spring Boot (comme IntelliJ IDEA ou Eclipse)

## Installation et Configuration

Pour installer et configurer l'application :

1. Clonez le repository GitHub : `git clone https://github.com/ChaimaaLachhab/E-Bank-Solution.git`
2. Importez le projet dans votre IDE.
3. Configurez les paramètres de la base de données dans `application.properties`.
4. Compilez et exécutez l'application.


## Auteur

Ce projet a été développé par CHAIMAA LACHHAB pour l'école ENAA Béni Mellal. Contact : [chaimaa.lachhab@outlook.com](mailto:chaimaa.lachhab@outlook.com)
