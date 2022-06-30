# Como Utilizar o GIT?

### Para alguém que começou a escrever os seus primeiros códigos agora, começar a utilizar o GIT pode parecer um pouco complicado, mas fica tranquilo, no fim é mais simples do que parece e você logo se fimiliariza e se acostuma.

## Vamos lá!

___


## 1. Começando

Bom, o primeiro passo é você criar um repósitório, onde ficarão os arquivos que você irá versionar com o GIT.

Para isso, você precisará abrir algum terminal, seja ele da sua preferência, porém irei me guiar pelos comandos do terminal do próprio GIT Bash.

- Logo que abrir o terminal, vá até o diretório em que você deseja criar o repositório através do comando:
    > `$ cd <dir>`

- Após chegar ao diretório de desejo, dê o comando: 

    > `$ git init`

- Isso irá criar o repositório, onde os seus arquivos serão guardados.

Para verificar se esta etapa ocorreu como deveria:

- vá até o diretório através do seu explorador de arquivos.

- Ative a visibilidade de pastas ocultas

- Se tudo estiver certo, você deve ver uma pasta chamada ".git".

## 2. Criando Arquivos

Agora que já criou o repósitório vamos crias alguns arquivos para testar na prática e aprender como funcionam as ferramentas do GIT.

- Ainda no terminal dê o comando:

    > `$ code .`

Isso abrirá o seu VScode.

- com ele aberto, já no diretótio onde você criou o repositório crie um arquivo chamado:

    > README.md

- Escreva dentro do arquivo:

    > Teste

- Salve o arquivo com o atalho de teclado: **Ctrl + S**

- Agora no terminal, dê o comando:

    > `$ git status`

Isso mostrará a você o status dos arquivos presentes no diretório, você poderá observar o arquivo "README.md" como "untracked", porque não foi adicionado e nem salvo através do GIT ainda.

## 3. Adiocionando Arquivos

Então agora vamos adiciona-lo ao diretório GIT.

- Para isso, dê o comando:

    > `$ git add README.md`

isso adicionará o arquivo ao diretório. Agora para verificar se isso aconteceu:

- Dê o comando

    > `$ git status`

Agora é possível observar que o arquivo "README.md", antes mostrado em vermelho, como "untrecked" agora está verde, registrado como "staged", pois foi adicionado.

## 4. Salvando Arquivos

já adicionamos o arquivo, mas isso não significa que ele está salvo, para isso ainda precisamos dar "commit". Vamos lá!

- Ainda no terminal, dê o código:
    > `$ guit commit README.md`

Isso abrirá uma tela de edição de texto dentro do próprio terminal, que é onde você vai descrever o que fez em seu projeto, para que ele serve, o que foi editado e etc.

- Para isso, aperte a tecla " **i** " do seu teclado para entrar no modo de edição, onde você poderá escrever.

- Neste caso, por se passar somente de um teste para entender o funcionamento da ferramenta, digite somente:

    > teste

- Após terminar a digitação, pressione a tecla **Esc** para sair do modo de edição.

- Uma vez fora dele, agora dê o comando:

    > `:wq!`

Isso fará você sair do editor de texto e salvará o arquivo com a descrição do projeto ou da modificação.

Há também uma maneira diferente e mais simples de dar commit e salvar os seus arquivos, vamos testar ela também.

- Volte ao arquivo no VScode e escreva na linha abaixo a "teste":

    > Texto Simples

- Agora de volta ao terminal dê o comando:

    > `$ git commit -m "Teste texto simples" README.md`

Com esse comando pulamos a parte de ter que abrir o editor de texto, porque já damos a mensagem de descrição no próprio comando, logo após o "`-m`".

E claro, agora que salvamos o arquivo, para verificar isso é simples.

- Dê o comando:

    > `$ git status`

Você vai ver que ele dirá que não tem nenhum arquivo para adicionar ou salvar, pois o que tinha já foi salvo.

## 5. Editando Arquivos

Ok, já sabemos adicionar arquivos e salvá-los, mas e se por acaso eu cometer algum erro, o que eu faço?

Para testar e aprender como fazer isso, iremos criar e utilizar outro arquivo, então vamos la!

- No VScode crie um novo arquivo chamado "**DOCS.go**".

- Faça todo o processo de adicionar e salvar ele no git, colocando em prática agora tudo que viu até aqui.

- Verifique se o arquivo foi salvo com sucesso através do:

    > `$ git status`

Você poderá observar que não terá nenhum arquivo listado.

- Agora que ele foi salvo no diretório GIT, exclua ele no VScode.

- Volte ao terminal e dê um:

    > `$ git status`

Você verá que o arquivo agora voltou a aparecer e está marcado como "Deleted", porque foi excluído do seu computador, mas como você o salvou do diretório GIT ainda é possível recupera-lo.

- Para isso, utilize o comando:

    > `$ git restore README.md`

Isso irá restaurar o arquivo à última situação a qual ele foi salvo, ou seja, ao último commit.

- Para verificar, abra o VScode.

O arquivo DOCS.go estará de volta lá. 

Isso não serve somente para recuperar arquivos perdidos ou excluídos, através deste processo é sempro possível retornar ao estágio anterior de um arquivo.