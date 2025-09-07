Todos os bugs do código devem ser corrigidos.

# Erros Identificados
- [x] Migrations
    - [x] pdf_link: já existe o pdf_url, retirar vai afetar os seguintes pontos -> 
        - [x] ProjectController.php, na função store, linha 45.
        - [x] ProjectService.php, na função createProject, linha 58.
        - [x] 2025_08_19_101618_alter_projects_add_columns_status_related_pdf_and_github.php, na função up, linhas 17 e 18.
    - [x] keywords, co_authors, author: O migration 2025_08_20_234723_add_keywords_co-authors adiona os três, porém na função down só remove o keywords e co_authors, falta o author. Suponho que não haja colaterais.
    - [x] name: já existe username, retirar vai afetar os seguintes poontos ->
        - [x] SignUpRequest.php, na função authorize, linha 25.
        - [x] UserResource.php, na função toArray, linha 19.
        - [x] User.php, na classe Authenticatable, linha 21.
        - [x] UserService.php, na função createUser, linha 18, e na função updateUser, linha 34 e 35.
        - [x] 2025_07_18_235415_create_personal_access_tokens_table, na função up, linha 17.
        - [x] 2025_07_19_130000_create_related_fields_table, na função up, linha 16.
        - [x] 2025_07_19_234533_alter_users_add_name_in_users_table, na função up, linha 11 e, na função down, linha 18.
        - [x] TestSearchSeeder.php, na função run, linha 24.
- [ ] Login, mesmo com o usuário existindo o login estava retornando erro.
- [ ] SigUp, atualmente não está criando o usuário, possível erro no back.
        
# Dúvidas
- [ ] É necessário manter related_fields e project_related? Somente uma dúvida mesmo.

# Nomenclatura
- [ ] github e github_link, pode ser interessante alterar a nomenclatura, github é pro usuário e github_link é para o projeto.
