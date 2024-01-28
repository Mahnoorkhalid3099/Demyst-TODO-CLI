# Command Line TODO Tool
## Overview
This JavaScript-based command line tool efficiently consumes and displays information from the first 20 even-numbered TODOs retrieved from the JSONPlaceholder API, presenting their titles and completion statuses.

##### Note from the developer:

In the process of retrieving the first 20 even TODOs, it's worth noting that individual API calls were made to JSONPlaceholder for each TODO. While this approach served the immediate purpose, a more proficient and resource-efficient solution would involve implementing a bulk API endpoint capable of fetching multiple TODOs in a single request. Such an enhancement could significantly reduce response time, cost, and enhance overall system efficiency. In light of this limitation, a loop was employed to iterate through the required TODO indices, making individual calls to acquire the desired data. 

## Prerequisites
Before usage, ensure that Docker is installed on your machine. Download Docker Desktop from https://www.docker.com/products/docker-desktop.

## Installation
1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repository.git
```
2. Navigate to the project directory:

```bash
cd your-repository
```
3. Build the Docker image:

```bash
docker-compose build
```
## Usage
Run the tool using Docker Compose:
```bash
docker-compose up
```
This command will fetch the first 20 even-numbered TODOs and display their titles along with completion statuses.

Test the project:
```bash
npm test
```
This command will run the included tests to ensure the functionality of the command line tool.

## Command Line Interface - Output
```gh
Fetching TODOs. Please wait...

Title: quis ut nam facilis et officia qui
Completed: false
---------------------------
Title: et porro tempora
Completed: true
---------------------------
Title: qui ullam ratione quibusdam voluptatem quia omnis
Completed: false
---------------------------
Title: quo adipisci enim quam ut ab
Completed: true
---------------------------
Title: illo est ratione doloremque quia maiores aut
Completed: true
---------------------------
Title: ipsa repellendus fugit nisi
Completed: true
---------------------------
Title: repellendus sunt dolores architecto voluptatum
Completed: true
---------------------------
Title: accusamus eos facilis sint et aut voluptatem
Completed: true
---------------------------
Title: dolorum est consequatur ea mollitia in culpa
Completed: false
---------------------------
Title: ullam nobis libero sapiente ad optio sint
Completed: true
---------------------------
Title: distinctio vitae autem nihil ut molestias quo
Completed: true
---------------------------
Title: adipisci non ad dicta qui amet quaerat doloribus ea
Completed: false
---------------------------
Title: aliquam aut quasi
Completed: true
---------------------------
Title: nesciunt totam sit blanditiis sit
Completed: false
---------------------------
Title: nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis
Completed: true
---------------------------
Title: earum doloribus ea doloremque quis
Completed: false
---------------------------
Title: porro aut necessitatibus eaque distinctio
Completed: false
---------------------------
Title: excepturi deleniti adipisci voluptatem et neque optio illum ad
Completed: true
---------------------------
Title: totam quia non
Completed: false
---------------------------
Title: totam atque quo nesciunt
Completed: true
---------------------------
```

## Other ways to run
In an alternate way, you can also use run following script at root directory for the project to display the output.
```bash
npm start
```

Thanks!
