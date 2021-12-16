# DOCKER-KUBERNETES-EXPRESS-TYPESCRIPT-GRPC

For teaching X all about the webscale stuff ;p 

Preqs:
nvm
wget
docker desktop
kubernetes stuff
...

Steps:

1. mkdir docker-kubernetes && cd docker-kubernetes - Create the project directory and move into it
2. printf "node_modules\ndist\n.env\n" > .gitignore && printf "16\n" > .nvmrc && printf "PORT=1337\n" > .env.example && printf "#docker-kubernetes\nFor all the webscale stuff\n" > README.md. In this step 
we are basically creating our files for git nvm an example of our .env file for dotenv, also creating basic README.md 
3. git init. Initialize a hgit repo here
4. git -m main Change the branch name from master to main for reasons
5. nvm use 16 use node version 16 
6. npm init -y initialize npm package
7. npm i --save express dotenv download express and dotenv and save then as dependencies
8. npm i --save-dev typescript eslint @types/node@16 @types/expres download typescript, eslint and type defs as dev dependencies
9. wget -O tsconfig.json https://raw.githubusercontent.com/tsconfig/bases/main/bases/node16.json - Get base tsconfig from github and save it as tsconfig.json
10. modify package.json scripts(build, start, lint)  and main section from "index.js" to "dist/index.js" We'll talk about this later
11. mkdir src - This directory is where all out source code will go
12. nvim src/index.ts -> setup basic express app. I'll explain this later
13. nvim src/config/dotenv.ts -> load dotenv, nvim src/config/index.ts -> Explain index file in directory for module
14. Next we'll talk a bit about how we want to do this
15. we'll set up sql on our computer
16. we'll setup sql in a container
16. we will get the IMDB data and load it into SQL
17. we will break up routes and add the following endpoints GET /movies GET /movie/:id GET /movie?genre=[] etc.
18. we will generate HTML server side and send it using node so we can see it in a browser
19. TBD
