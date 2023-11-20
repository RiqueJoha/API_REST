CREATE DATABASE HC;

USE HC;

CREATE TABLE nacimientos(
id_padron INT NOT NULL AUTO_INCREMENT,
sexo VARCHAR(30) NOT NULL,
nombre VARCHAR(30) NOT NULL,
apellido VARCHAR(30) NOT NULL,
peso FLOAT,
PRIMARY KEY (id_padron)
);

 DESCRIBE nacimientos;

INSERT INTO nacimientos (sexo, nombre,apellido, peso)VALUE("Masculino","Daniel","Peralta",3.1);

INSERT INTO nacimientos (sexo, nombre,apellido, peso)VALUE("","","", 0);

UPDATE nacimientos SET sexo="", nombre="",apellido="", peso=""  WHERE id_padron=2;

DELETE FROM nacimientos where id_padron=6;

SELECT * FROM nacimientos;