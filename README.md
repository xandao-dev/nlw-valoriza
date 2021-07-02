
<br />
<p align="center">
  <a href="https://github.com/xandao6/nlw-valoriza">
    <img src="images/nlw.png" alt="Logo" width="222" height="32">
  </a>

  <h3 align="center">NLW Valoriza</h3>

  <p align="center">
  NLW Valoriza is a back-end project that serves to compliment your co-workers.
  This tool was created at Rocketseat's Next Level Week 6 event.
    <br />
    <a href="https://github.com/xandao6/nlw-valoriza"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/xandao6/nlw-valoriza/issues">Report Bug</a>
    ·
    <a href="https://github.com/xandao6/nlw-valoriza/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#business-rules">Business Rules</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<div align="center">
  <a href="https://github.com/xandao6/nlw-valoriza">
    <img src="images/together.png" alt="NLW Together">
  </a>
</div>

### Features

* Register coworkers
* Register tags (praise)
* Send compliments to coworkers

### Built With

* [node.js](https://nodejs.org/) - evented I/O for the backend with JS
* [Express](https://expressjs.com/) - fast web framework for node.js
* [TypeORM](https://typeorm.io/#/) - Object Relational Model framework to work easily with databases
* [PostgreSQL](https://www.postgresql.org/) - Advanced Open Source Relational Database. We migrated from `sqlite3` to `PostgreSQL`.

### Business Rules

- User registration

	- [x] It's not allowed to register an user with same email
	- [x] It's not allowed to register an user without email
  - [ ] It's not allowed to register an user with invalid/disposable email
  - [x] It's not allowed to create an admin user directly
  - User password:
    - [x] Should not be empty
    - [x] Should be encrypted when it goes to database
    - [ ] Should have a minimum of 8 characters
    - [ ] Should have letters and numbers

- User update

  - [x] It's not allowed to turn a user into admin if you are not an admin
  - [ ] It's not allowed to edit a user other than yourself if you are not an admin

- Tag registration

	- [x] Is not allowed to register a tag with same name
	- [x] Is not allowed to register a tag without name
	- [x] Is not allowed registrations from non admin users

- Compliments registration

	- [x] Is not allowed an user to register a tag to himself
	- [x] Is not allowed to register a tag to invalid users
	- [x] The user must be authenticated in order to register a tag


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/xandao6/nlw-valoriza.git
   ```
2. [Install Docker Engine](https://docs.docker.com/engine/install/)
3. [Install Docker Compose](https://docs.docker.com/compose/install/)
4. Build the docker image
  ```sh
  cd nlw-valoriza
  docker-compose up -d --build
  ```
5. Set up a local database
  ```sh
docker-compose exec back-end-dev /bin/sh
    > yarn typeorm migration:run
    > exit
  ```



<!-- USAGE EXAMPLES -->
## Usage

* Start the back-end service
	```sh
  docker-compose up -d
  ```
* Stop the back-end service
  ```sh
  docker-compose down
  ```

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/xandao6/nlw-valoriza/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

NLW Valoriza uses [Trunk Based Development(TBD)](https://trunkbaseddevelopment.com/) workflow and [Conventional Commits](www.conventionalcommits.org)!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Need a database tool? Try these [DBeaver](https://dbeaver.io/) or [BeeKeeper Studio](https://www.beekeeperstudio.io/)
Want to try the API? Try these [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/)

<!-- LICENSE -->
## License

Distributed under the MIT License. See [LICENSE](./LICENSE.md) for more information.
Free software =)


<!-- CONTACT -->
## Contact

Alexandre Calil - [@xandao6](https://www.linkedin.com/in/xandao6/) - alexandrecalilmf@gmail.com
Project Link: [https://github.com/xandao6/nlw-valoriza](https://github.com/xandao6/nlw-valoriza)

## Acknowledgements

* [TypeScript](https://www.typescriptlang.org/) - strongly typed JavaScript
* [eslint](https://github.com/eslint/eslint) with [AirBnB config](https://github.com/iamturns/eslint-config-airbnb-typescript) - code quality linter with the opinionated AirBnB config
* [prettier](https://github.com/prettier/prettier) with [eslint plugin](https://github.com/prettier/eslint-plugin-prettier) and [eslint config](https://github.com/prettier/eslint-config-prettier) - formatter linter with eslint integration
* [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - Industry standard RFC 7519 method for representing claims securely between two parties.
* [class-transformer](https://github.com/typestack/class-transformer) - Transform plain objects into class instances
* [reflect-metadata](https://github.com/rbuckton/reflect-metadata) - Add metadata in classes with decorators
* [bcryptjs](https://github.com/dcodeIO/bcrypt.js) - Encrypt passwords!
* [cors](https://github.com/expressjs/cors) - Enable Cross Origin Resource Sharing, to communicate with a front-end.
* [dotenv](https://github.com/motdotla/dotenv) - Use environment variables across nodejs
* [express-async-errors](https://github.com/davidbanham/express-async-errors) - Try Catch async errors on express
* [uuid](https://github.com/uuidjs/uuid) - Generate uuids to use in db
* [ts-node](https://github.com/TypeStrong/ts-node) - used to run migrations on production
* [ts-node-dev](https://github.com/wclr/ts-node-dev) - transpile TS and hot reload your app



<!-- LINKS & IMAGES Variables-->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/xandao6/repo.svg?style=for-the-badge
[contributors-url]: https://github.com/xandao6/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/xandao6/repo.svg?style=for-the-badge
[forks-url]: https://github.com/xandao6/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/xandao6/repo.svg?style=for-the-badge
[stars-url]: https://github.com/xandao6/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/xandao6/repo.svg?style=for-the-badge
[issues-url]: https://github.com/xandao6/repo/issues
[license-shield]: https://img.shields.io/github/license/xandao6/repo.svg?style=for-the-badge
[license-url]: https://github.com/xandao6/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/xandao6
