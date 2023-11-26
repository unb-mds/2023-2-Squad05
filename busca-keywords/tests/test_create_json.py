import json
import pytest
from export import create_json

@pytest.fixture
def dados():
    return {"key1": "value",
            "key2": "value2"}


@pytest.fixture
def diretorio():
    return 'busca-keywords/tests/dados_test'

def test_create_json(diretorio, dados):
    # Cria um diretório temporário para os testes
    temp_dir = diretorio.mkdir("temp_test")

    # Testa se a função create_json cria corretamente um arquivo JSON
    nome_arquivo = "test_file"
    caminho_arquivo = temp_dir.join(f'{nome_arquivo}.json')
    create_json(caminho_arquivo, dados)

    # Verifica se o arquivo foi criado
    assert caminho_arquivo.exists()

    # Verifica se o conteúdo do arquivo é correto
    with open(caminho_arquivo) as arquivo_json:
        conteudo = json.load(arquivo_json)
    assert conteudo == dados

