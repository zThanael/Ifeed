-- TABELAS DAS EMPRRESAS ( UNIVERSIDADES )

CREATE TABLE empresas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    cnpj VARCHAR(15) UNIQUE,
    email VARCHAR(200)
);

CREATE TABLE unidades(
    id SERIAL PRIMARY KEY,
    id_empresa INT,
    nome VARCHAR(200)
);

CREATE TABLE cursos (
    id SERIAL PRIMARY KEY,
    id_unidade INT,
    nome VARCHAR(50)
);

CREATE TABLE materias (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100)
);

CREATE TABLE periodos (
    id SERIAL PRIMARY KEY,
    numero INT
);

-- Tabela de ligação de tudo
CREATE TABLE info_periodos(
    id SERIAL PRIMARY KEY,
    id_curso INT,
    id_periodo INT,
    id_materia INT,
    id_professor INT,
    ano CHAR(4)
);

-- ALUNOS E PROFESSORES

CREATE TABLE professores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(150),
    senha VARCHAR(250)
);

CREATE TABLE alunos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(150),
    id_curso INT
);

CREATE TABLE periodo_alunos (
    id_info_periodo INT,
    id_aluno INT,
    PRIMARY KEY (id_info_periodo, id_aluno)
);

-- CONSTRAINTS DOS AGENTES

ALTER TABLE unidades
    ADD CONSTRAINT ref_unidades_to_empresas
    FOREIGN KEY (id_empresa) REFERENCES empresas(id
        MATCH SIMPLE
	    ON DELETE NO ACTION
	    ON UPDATE CASCADE)
    
ALTER TABLE cursos
    ADD CONSTRAINT ref_cursos_to_unidades
    FOREIGN KEY (id_unidade) REFERENCES unidades(id)
        MATCH SIMPLE
	    ON DELETE NO ACTION
	    ON UPDATE CASCADE)

ALTER TABLE info_periodos
    ADD CONSTRAINT ref_info_periodos_to_periodos
    FOREIGN KEY (id_periodo) REFERENCES periodos(id)
        MATCH SIMPLE
        ON DELETE NO ACTION
        ON UPDATE CASCADE
    ADD CONSTRAINT ref_info_periodos_to_materias
    FOREIGN KEY (id_materia) REFERENCES materias(id)
        MATCH SIMPLE
        ON DELETE NO ACTION
        ON UPDATE CASCADE
    ADD CONSTRAINT ref_info_periodos_to_cursos
    FOREIGN KEY (id_curso) REFERENCES cursos(id)
        MATCH SIMPLE
        ON DELETE NO ACTION
        ON UPDATE CASCADE
    ADD CONSTRAINT ref_info_periodos_to_professores
    FOREIGN KEY (id_professor) REFERENCES professores(id)
        MATCH SIMPLE
        ON DELETE NO ACTION
        ON UPDATE CASCADE

ALTER TABLE periodo_alunos
    ADD CONSTRAINT ref_periodo_alunos_to_info_periodos
    FOREIGN KEY (id_info_periodo) REFERENCES info_periodos(id)
        MATCH SIMPLE
        ON DELETE NO ACTION
        ON UPDATE CASCADE
    ADD CONSTRAINT ref_periodo_alunos_to_alunos
    FOREIGN KEY (id_aluno) REFERENCES alunos(id)
        MATCH SIMPLE
        ON DELETE NO ACTION
        ON UPDATE CASCADE
    
-- FINALIZAÇÃO DA CRIAÇÃO DAS EMPRESAS E USUARIOS.


-- CRIAÇÃO DAS TABELAS E CONSTRAINTS DAS PERGUNTAS.

CREATE TABLE tipo_pergunta(
    id SERIAL PRIMARY KEY,
    tipo VARCHAR(25) UNIQUE
);

CREATE TABLE categorias(
    id SERIAL PRIMARY KEY,
    categoria VARCHAR(25) UNIQUE
);

CREATE TABLE perguntas(
    id SERIAL PRIMARY KEY,
    id_tipo_pergunta INT,
    id_categoria INT,
    pergunta TEXT
);

CREATE TABLE respostas(
    id SERIAL PRIMARY KEY,
    id_tipo_pergunta,
    resposta varchar(20)
);

-- CONSTRAINTS DAS PERGUNTAS
ALTER TABLE perguntas
    ADD CONSTRAINT ref_perguntas_to_categorias
    FOREIGN KEY (id_categoria) REFERENCES categorias(id)
        MATCH SIMPLE
        ON DELETE NO ACTION
        ON UPDATE CASCADE
    ADD CONSTRAINT ref_perguntas_to_tipo_perguntas
        FOREIGN KEY (id_tipo_pergunta) REFERENCES tipo_pergunta (id)
            MATCH SIMPLE
            ON DELETE NO ACTION
            ON UPDATE CASCADE

ALTER TABLE respostas
    ADD CONSTRAINT ref_respostas_to_tipo_pergunta
    FOREIGN KEY (id_tipo_pergunta) REFERENCES tipo_pergunta(id)
        MATCH SIMPLE
        ON DELETE NO ACTION
        ON UPDATE CASCADE

-- FINALIZAÇÃO PERGUNTAS


-- CRIAÇÃO QUESTIONARIO

CREATE TABLE questionarios(
    id SERIAL PRIMARY KEY,
    id_professor INT,
    id_info_periodo INT
);

CREATE TABLE perguntas_questionario(
    id_questionario INT
    id_pergunta INT
    PRIMARY KEY (id_questionario,id_pergunta)
);

-- CONSTRAINTS DO QUESTIONARIO

ALTER TABLE questionarios
    ADD CONSTRAINT ref_questionarios_to_professores
    FOREIGN KEY (id_professor) REFERENCES professores(id)
        MATCH SIMPLE
        ON DELETE NO ACTION
        ON UPDATE CASCADE
    ADD CONSTRAINT ref_questionarios_to_info_periodo
    FOREIGN KEY (id_info_periodo) REFERENCES info_periodo(id)
        MATCH SIMPLE
        ON DELETE NO ACTION
        ON UPDATE CASCADE

ALTER TABLE perguntas_questionario
    ADD CONSTRAINT ref_perguntas_questionario_to_questionarios
    FOREIGN KEY (id_questionario) REFERENCES questionarios(id)
        MATCH SIMPLE
        ON DELETE NO ACTION
        ON UPDATE CASCADE
    ADD CONSTRAINT ref_perguntas_questionario_to_perguntas
    FOREIGN KEY (id_pergunta) REFERENCES perguntas(id)
        MATCH SIMPLE
        ON DELETE NO ACTION
        ON UPDATE CASCADE

-- FINALIZAÇÃO DO QUESTIONARIO

-- CRIAÇÃO ALUNO - QUESTIONARIO

CREATE TABLE info_resposta(
    id SERIAL PRIMARY KEY,
    id_pergunta INT,
    id_resposta INT,
    id_questionario_aluno INT
);

CREATE TABLE comentarios(
    id SERIAL PRIMARY KEY,
    id_questionario_aluno INT,
    id_pergunta INT,
    comentario TEXT
);

CREATE TABLE questionario_aluno(
    id SERIAL PRIMARY KEY,
    id_aluno INT,
    id_questionario INT,
    data DATE
);

-- CRIAÇÃO DAS CONSTRAINTS DO ALUNO - QUESTIONARIO
ALTER TABLE questionario_aluno
    ADD CONSTRAINT ref_questionario_aluno_to_aluno
    FOREIGN KEY (id_aluno) REFERENCES alunos(id)
        MATCH SIMPLE
        ON DELETE NO ACTION
        ON UPDATE CASCADE
    ADD CONSTRAINT ref_questionario_aluno_to_questionarios
    FOREIGN KEY (id_questionario) REFERENCES questionarios(id)
        MATCH SIMPLE
        ON DELETE NO ACTION
        ON UPDATE CASCADE

ALTER TABLE info_resposta
    ADD CONSTRAINT ref_info_resposta_to_respostas
    FOREIGN KEY (id_resposta) REFERENCES respostas(id)
        MATCH SIMPLE
        ON DELETE NO ACTION
        ON UPDATE CASCADE
    ADD CONSTRAINT ref_info_resposta_to_perguntas
    FOREIGN KEY (id_pergunta) REFERENCES perguntas(id)
        MATCH SIMPLE
        ON DELETE NO ACTION
        ON UPDATE CASCADE
    ADD CONSTRAINT id_info_resposta_to_questionario_aluno
    FOREIGN KEY (id_questionario_aluno) REFERENCES questionario_aluno(id)
        MATCH SIMPLE
        ON DELETE NO ACTION
        ON UPDATE CASCADE

ALTER TABLE comentarios
    ADD CONSTRAINT ref_comentarios_to_perguntas
    FOREIGN KEY (id_pergunta) REFERENCES perguntas(id)
        MATCH SIMPLE
        ON DELETE NO ACTION
        ON UPDATE CASCADE
    ADD CONSTRAINT ref_comentario_to_questionario_aluno
    FOREIGN KEY (id_questionario_aluno) REFERENCES questionario_aluno(id)
        MATCH SIMPLE
        ON DELETE NO ACTION
        ON UPDATE CASCADE