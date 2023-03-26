# Deploying custom image on docker hub automating using jenkins

### Objectives :

- Create a docker file for image
- Create Jenkins file for pipeline
- Check credentials and run the repo from jenkins console.

---

```bash
npm init
npm I express

# initialise dir with npm and create an express server
```

- Create a [dockerfile](https://github.com/sanchitpasricha/imageDeployment-jenkins/blob/master/dockerfile) for image creation

- Create a [jenkinsfile](https://github.com/sanchitpasricha/imageDeployment-jenkins/blob/master/Jenkinsfile) for pipeline

- Go to jenkins console and create a new pipeline job

  1. In pipeline section under definition choose pipeline script from SCM
  2. Under SCM section choose GIT
  3. Enter Repo URL, Credentials and under script path write Jenkinsfile
  4. Apply, Save and Build the pipeline

### It will create an image using dockerfile and jenkins will automate the process and finally pushing the image on docker hub.
