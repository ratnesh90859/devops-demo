pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/ratnesh90859/devops-demo.git'
            }
        }

        stage('Build Docker') {
            steps {
                sh 'docker build -t devops-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 8081:8080 devops-app'
            }
        }
    }
}
