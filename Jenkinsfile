pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/ratnesh90859/devops-demo.git'
            }
        }

        stage('Build Docker') {
            steps {
                sh 'docker build -t devops-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker stop devops-app 2>/dev/null || true
                docker rm devops-app 2>/dev/null || true
                docker run -d -p 8081:8080 --name devops-app devops-app
                '''
            }
        }
    }
}
