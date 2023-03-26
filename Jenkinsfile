pipeline {
    agent any
    enviornment{
        DOCKERHUB_CREDS = credentials('dockerhub')
    }
    stages {
        stage('clone repo') {
            steps {
               checkout scm
               sh 'ls *'
            }
        }
        stage('build image'){
            steps{
                sh 'docker build -t sanchitpasricha/jenkinstest:$BUILD_NUMBER .'
            }
        }
        stage('docker login'){
            steps{
                sh 'docker login -u $DOCKERHUB_CREDS_USR -p $DOCKERHUB_CREDS_PSW'
            }
        }
        stage('docker push'){
            steps{
                sh 'docker push sanchitpasricha/jenkinstest:$BUILD_NUMBER'
            }
        }
    }
    post{
        always{
            sh 'docker logout'
        }
    }
}
