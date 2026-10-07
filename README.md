# Carbo

Projeto de estudos e exercícios de programação. A página principal apresenta a identidade visual do Carbo, e as pastas de aula guardam exemplos feitos durante as aulas.

## Tecnologias usadas

- **HTML** para estruturar as páginas.
- **CSS** para os estilos da página principal e dos exercícios.
- **JavaScript** para interações e exercícios com `window.alert`, `window.confirm`, `window.prompt` e template strings.
- **Git e GitHub** para versionar o projeto. Repositório: [gabx2/carbo](https://github.com/gabx2/carbo).

## Estrutura

- `index.html` — página principal do Carbo.
- `style.css` — estilos da página principal.
- `img/` — imagens usadas pelo projeto.
- `aula04/` — exercício `ex001.html` com caixas de alerta, confirmação e entrada de texto.
- `aula06/` — exercícios `ex002.html`, `ex003.html` e `ex004.html` com entrada e exibição de dados.
- `.vscode/` — recomendações de extensões e configurações do VS Code.

## Editor e extensões

O projeto contém estas extensões recomendadas para o Visual Studio Code, definidas em `.vscode/extensions.json`:

- **Prettier – Code formatter** (`esbenp.prettier-vscode`) — formatação do código.
- **Material Icon Theme** (`PKief.material-icon-theme`) — ícones de arquivos e pastas.
- **Omni Theme** (`rocketseat.theme-omni`) — tema de cores do editor.
- **Live Server** (`ritwickdey.LiveServer`) — servidor local para visualizar páginas durante o desenvolvimento.

As configurações do workspace ativam a formatação ao salvar e colar, usando o Prettier como formatador padrão, com aspas duplas, indentação de 2 espaços e sem ponto e vírgula. O tema configurado é Omni, e os ícones são do Material Icon Theme.

## Instalar em outro computador

Instale o **Git** e o **Visual Studio Code**. Depois, clone o repositório e abra a pasta:

```bash
git clone https://github.com/gabx2/carbo.git
cd carbo
code .
```

Ao abrir o projeto, o VS Code pode sugerir as extensões recomendadas. Também é possível instalá-las pelo terminal integrado com estes comandos (o comando `code` precisa estar disponível no terminal):

```bash
code --install-extension esbenp.prettier-vscode
code --install-extension PKief.material-icon-theme
code --install-extension rocketseat.theme-omni
code --install-extension ritwickdey.LiveServer
```

As configurações do workspace ficam em `.vscode/settings.json` e são aplicadas ao abrir a pasta no VS Code.

## Terminal e sugestões de comandos

No PowerShell, o recurso de sugestões do terminal se chama **Predictive IntelliSense** e é fornecido pelo módulo **PSReadLine**. O perfil do PowerShell deste ambiente configura as sugestões em modo `ListView`, que mostra opções enquanto você digita.

Para ativar essas sugestões no PowerShell de outro computador, execute:

```powershell
Install-Module -Name PSReadLine -Scope CurrentUser -Force
Set-PSReadLineOption -PredictionSource History
Set-PSReadLineOption -PredictionViewStyle ListView
```

O PSReadLine oferece o recurso de sugestões; o histórico local do PowerShell é usado como fonte das sugestões.

No VS Code, o terminal integrado está configurado para abrir com **Git Bash** no Windows (`.vscode/settings.json`).

## Abrir o projeto

Abra `index.html` no navegador. Se a extensão Live Server estiver instalada, também é possível clicar com o botão direito no arquivo e escolher **Open with Live Server**.
