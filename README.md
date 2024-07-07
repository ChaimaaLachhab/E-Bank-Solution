# E-Bank-Solution

## 1. Introduction

Ce projet constitue le backend de l'application e-bank de Bank Solutions, permettant la gestion des comptes bancaires, des transactions et des cartes.

## Table des Matières

- [Functionalist](#2. Fonctionnalités)
- [Structure du Projet](#3. Structure du Projet)
- [Classes de l'Application e-Banking](#4. Les Classes de l'Application e-Banking)
- [Énumérations de l'Application e-Banking](#5. Les Énumérations de l'Application e-Banking)
- [Exceptions de l'Application e-Banking](#6. Les Exceptions de l'Application e-Banking)
- [Responsabilités des Méthodes de l'Application e-Banking](#7. Les Responsabilités des Méthodes de l'Application e-Banking)
- [Instructions d'Utilisation](#8. Instructions d'Utilisation)
- [Utilisation](#9. Utilisation)
- [Technologies Utilisées](#10. Technologies Utilisées)
- [Prérequis](#11. Prérequis)
- [Installation et Configuration](#12. Installation et Configuration)
- [Auteur](#13. Auteur)


## 2. Fonctionnalités

L'application e-Banking permet la gestion des comptes bancaires et des transactions financières. Voici ses principales fonctionnalités :

- Gestion des utilisateurs, des comptes et des bénéficiaires.
- Création, mise à jour et suppression des comptes bancaires.
- Gestion des cartes bancaires, y compris l'activation, la désactivation et le blocage.
- Réalisation de transferts internes et externes entre comptes.
- Gestion des exceptions liées aux opérations bancaires.

## 3. Structure du Projet

Le projet est structuré comme suit :

- `src/main/java/ebank`: Contient les classes principales de l'application.
- `src/test/java/ebank`: Contient les tests unitaires.
- `UML`: Contient les diagrammes UML de conception.

## 4. Les Classes de l'Application e-Banking

### 4.1. Account

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

### 4.2. BankCard

**Objectif** : Représente une carte bancaire associée à un compte.

**Attributs** :
- `id` (type `Long`): Identifiant unique de la carte bancaire (généré automatiquement).
- `cardNumber` (type `String`): Numéro de la carte bancaire.
- `expirationDate` (type `String`): Date d'expiration de la carte.
- `cardType` (type `CardType`): Type de carte bancaire (ex: Visa, MasterCard).
- `status` (type `Status`): État actuel de la carte (activée, désactivée, bloquée).
- `blockRaison` (type `String`): Raison du blocage de la carte.
- `account` (type `Account`): Compte auquel la carte est associée.

### 4.3. Beneficiary

**Objectif** : Représente un bénéficiaire pour les transferts externes.

**Attributs** :
- `id` (type `Long`): Identifiant unique du bénéficiaire (généré automatiquement).
- `name` (type `String`): Nom du bénéficiaire.
- `rib` (type `String`): Identifiant international du compte du bénéficiaire.
- `bankName` (type `BankName`): Nom de la banque du bénéficiaire.
- `account` (type `Account`): Compte auquel le bénéficiaire est associé.
- `transactions` (type `List<Transaction>`): Liste des transactions effectuées avec ce bénéficiaire.

### 4.4. Transaction

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

### 4.5. User

**Objectif** : Représente un utilisateur de l'application e-Banking.

**Attributs** :
- `id` (type `Long`): Identifiant unique de l'utilisateur (généré automatiquement).
- `name` (type `String`): Nom de l'utilisateur.
- `phone` (type `String`): Numéro de téléphone de l'utilisateur.
- `address` (type `String`): Adresse de l'utilisateur.
- `city` (type `String`): Ville de résidence de l'utilisateur.
- `accounts` (type `List<Account>`): Liste des comptes bancaires associés à cet utilisateur.

## 5. Les Énumérations de l'Application e-Banking

### 5.1. AccountType

**Objectif** : Représente le type de compte bancaire.

**Valeurs** :
- `CURRENT` : Compte courant.
- `SAVING` : Compte d'épargne.

### 5.2. BankName

**Objectif** : Représente le nom d'une banque.

**Valeurs** :
- `CIH`
- `BMCE`
- `ATTIJARI`
- `CREDIT_AGRICOLE`
- `CERDIT_DU_MAROC`
- `OUMNIA_BANK`
- `BANK_POPULAIRE`

### 5.3. CardType

**Objectif** : Représente le type de carte bancaire.

**Valeurs** :
- `CREDIT` : Carte de crédit.
- `DEBIT` : Carte de débit.

### 5.4. Status

**Objectif** : Représente l'état d'une carte bancaire.

**Valeurs** :
- `ACTIVATE` : Carte activée.
- `DEACTIVATE` : Carte désactivée.
- `BLOCK` : Carte bloquée.

### 5.5. TransactionType

**Objectif** : Représente le type de transaction financière.

**Valeurs** :
- `CREDIT` : Transaction de crédit (dépôt).
- `DEBIT` : Transaction de débit (retrait).

### 5.6. TransferType

**Objectif** : Représente le type de transfert de fonds.

**Valeurs** :
- `INTERNAL` : Transfert interne entre comptes de même utilisateur.
- `EXTERNAL` : Transfert externe vers un compte dans une autre banque.

## 6. Les Exceptions de l'Application e-Banking

### 6.1. AccountAlreadyExistsException

**Objectif** : Exception lancée lorsqu'un compte existe déjà dans le système.

### 6.2. AccountClosedException

**Objectif** : Exception lancée lorsqu'une tentative est faite sur un compte fermé.

### 6.3. AccountNotFoundException

**Objectif** : Exception lancée lorsqu'un compte n'est pas trouvé dans le système.

### 6.4. BankCardNotFoundException

**Objectif** : Exception lancée lorsqu'une carte bancaire n'est pas trouvée dans le système.

### 6.5. BankCardAlreadyBlockedException

**Objectif** : Exception lancée lorsqu'une tentative est faite pour bloquer une carte déjà bloquée.

### 6.6. BeneficiaryNotFoundException

**Objectif** : Exception lancée lorsqu'un bénéficiaire n'est pas trouvé dans le système.

### 6.7. BlockReasonEmptyException

**Objectif** : Exception lancée lorsqu'aucune raison n'est spécifiée pour bloquer une carte bancaire.

### 6.8. CardAlreadyExistsException

**Objectif** : Exception lancée lorsqu'une tentative est faite pour créer une carte qui existe déjà.

### 6.9. CardNotAllowedForSavingsException

**Objectif** : Exception lancée lorsqu'une carte de crédit est associée à un compte d'épargne, ce qui n'est pas autorisé.

### 6.10. InsufficientBalanceException

**Objectif** : Exception lancée lorsqu'un utilisateur tente d'effectuer une transaction avec un solde insuffisant.

### 6.11. NonZeroBalanceException

**Objectif** : Exception lancée lorsqu'un utilisateur tente de fermer un compte avec un solde non nul.

### 6.12. UserNotFoundException

**Objectif** : Exception lancée lorsqu'un utilisateur n'est pas trouvé dans le système.

## 7. Les Responsabilités des Méthodes de l'Application e-Banking

### 7.1. UserService

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

### 7.2. AccountService

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

### 7.3. TransactionService

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

### 7.4. BeneficiaryService

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

### 7.5. BankCardService

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

## 8. Instructions d'Utilisation

### 8.1. Gestion des Utilisateurs

- Endpoint pour récupérer tous les utilisateurs : `GET /api/user/all`
- Endpoint pour créer un utilisateur : `POST /api/user/add`
- Endpoint pour mettre à jour un utilisateur : `PUT /api/user/update/{id}`
- Endpoint pour supprimer un utilisateur : `DELETE /api/user/delete/{id}`

### 8.2. Gestion des Comptes

- Endpoint pour récupérer tous les comptes : `GET /api/account/all/{userId}`
- Endpoint pour créer un compte : `POST /api/account/add/{userId}`
- Endpoint pour mettre à jour un compte : `PUT /api/account/update/{accountId}`
- Endpoint pour supprimer un compte : `DELETE /api/account/delete/{accountId}`
- Endpoint pour fermer un compte : `PUT /api/account/close/{accountId}`
- Endpoint pour obtenir le solde d'un compte : `GET /api/account/balance/{accountId}`

### 8.3. Gestion des Transactions

- Endpoint pour récupérer toutes les transactions d'un compte : `GET /api/transaction/all/{accountId}`
- Endpoint pour effectuer un transfert interne : `POST /api/transaction/internal/{accountId}`
- Endpoint pour effectuer un transfert externe : `POST /api/transaction/external/{accountId}`

### 8.4. Gestion des Bénéficiaires

- Endpoint pour récupérer tous les bénéficiaires d'un compte : `GET /api/beneficiary/all/{accountId}`
- Endpoint pour ajouter un bénéficiaire à un compte : `POST /api/beneficiary/add/{accountId}`
- Endpoint pour mettre à jour un bénéficiaire : `PUT /api/beneficiary/update/{beneficiaryId}`
- Endpoint pour supprimer un bénéficiaire : `DELETE /api/beneficiary/delete/{beneficiaryId}`

### 8.5. Gestion des Cartes Bancaires

- Endpoint pour récupérer toutes les cartes bancaires d'un compte : `GET /api/bankCard/all/{accountId}`
- Endpoint pour ajouter une carte bancaire à un compte : `POST /api/bankCard/add/{accountId}`
- Endpoint pour activer ou désactiver une carte bancaire : `PUT /api/bankCard/activate/{bankCardId}`
- Endpoint pour bloquer une carte bancaire : `PUT /api/bankCard/block/{bankCardId}`


## 9. Utilisation

Pour utiliser l'application :

1. Lancez l'application depuis votre IDE ou en ligne de commande.
2. Utilisez un outil comme Postman pour tester les API exposées.
3. Suivez les instructions d'utilisation pour gérer les comptes, effectuer des transactions, etc.

## 10. Technologies Utilisées

L'application utilise les technologies suivantes :

- Java JDK 21
- Spring Boot 2.5.4
- Spring Data JPA pour l'accès aux données
- Spring MVC pour la gestion des requêtes HTTP
- MySQL comme base de données relationnelle
- Junit & Mockito pour les tests

## 11. Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- Java JDK 21
- MySQL Server
- Un IDE compatible avec Java et Spring Boot (comme IntelliJ IDEA ou Eclipse)

## 12. Installation et Configuration

Pour installer et configurer l'application :

1. Clonez le repository GitHub : `git clone https://github.com/ChaimaaLachhab/E-Bank-Solution.git`
2. Importez le projet dans votre IDE.
3. Configurez les paramètres de la base de données dans `application.properties`.
4. Compilez et exécutez l'application.

## 13. Auteur

Ce projet a été développé par CHAIMAA LACHHAB pour l'école ENAA Béni Mellal. Contact : [chaimaa.lachhab@outlook.com](mailto:chaimaa.lachhab@outlook.com)
