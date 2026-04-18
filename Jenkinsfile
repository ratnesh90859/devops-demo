pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'YOUR_GITHUB_REPO_URL'
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
