pipeline {
  environment {
    registry = "lobomfz/resume-backend"
    registryCredential = 'Docker-lobomfz'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git branch: 'master',
            credentialsId: 'github-ssh',
            url: 'git@github.com:lobomfz/resume-backend.git'
      }
    }
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":latest"
        }
      }
    }
    stage('Deploy Image') {
      steps{
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $registry:latest"
      }
    }
    stage('Publish') {
      steps{
        sshPublisher(publishers:
        [sshPublisherDesc(
          configName: 'localhost',
          transfers: [sshTransfer (
            cleanRemote: false,
            excludes: '',
            execCommand: 'docker-compose pull && docker-compose kill && docker-compose up --force-recreate -d',
            execTimeout: 120000,
            flatten: false,
            makeEmptyDirs: false,
            noDefaultExcludes: false,
            patternSeparator: '[, ]+',
            remoteDirectory: '',
            remoteDirectorySDF: false,
            removePrefix: '',
            sourceFiles: '' )],
            usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
      }
    }
  }
}
