CREATE DATABASE inlock_games_dbFirst_tarde
USE inlock_games_dbFirst_tarde

CREATE TABLE Estudio
(
	IdEstudio UNIQUEIDENTIFIER PRIMARY KEY,
	Nome VARCHAR(100) NOT NULL
)

CREATE TABLE Jogo
(
	IdJogo UNIQUEIDENTIFIER PRIMARY KEY,
	IdEstudio UNIQUEIDENTIFIER FOREIGN KEY REFERENCES Estudio(IdEstudio),
	Nome VARCHAR(100) NOT NULL,
	Descricao VARCHAR(100) NOT NULL,
	DataLancamento DATE NOT NULL,
	Valor SMALLMONEY NOT NULL
)

CREATE TABLE TiposUsuario
(
	IdTipoUsuario UNIQUEIDENTIFIER PRIMARY KEY,
	Titulo VARCHAR(100) NOT NULL
)

CREATE TABLE Usuario
(
	IdUsuario UNIQUEIDENTIFIER PRIMARY KEY,
	IdTipoUsuario UNIQUEIDENTIFIER FOREIGN KEY REFERENCES TiposUsuario(IdTipoUsuario),
	Email VARCHAR(100) NOT NULL,
	Senha VARCHAR(100) NOT NULL
)

INSERT INTO Estudio
VALUES (NEWID(),'SENAI'),(NEWID(),'SESI'),(NEWID(),'SEBRAE')

SELECT * FROM Estudio

INSERT INTO Jogo
VALUES (NEWID(),'10F89299-3EB1-427F-8870-2B5E55565724','PING PONG','JOGO LEGAL','2023-01-01',500),
	   (NEWID(),'54917B93-3D3A-4D9F-B852-261F82E24940','JUCAMOM','CA�A POKEMOM','2022-03-23',2.99)

SELECT * FROM Jogo

INSERT INTO TiposUsuario
VALUES (NEWID(),'administrador'),(NEWID(),'comum')

SELECT * FROM TiposUsuario

INSERT INTO Usuario
VALUES (NEWID(),'E535BE1F-4087-4E6F-A66A-3BFF37A2842E','adm@adm.com','admin'),
	   (NEWID(),'46547308-0BEA-4A29-AB05-FDC3A7D2340D','comum@comum.com','comum')

SELECT * FROM Usuario 