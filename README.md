# vc-deploy-assessment-priyal

# Version Control & Deployment Assessment - Priyal Rahate

## Personal Information
**Full Name:** Priyal Muniraj Rahate  
**GitHub Username:** https://github.com/priyalrahate
**Vercel Username:** 

---

## Summary: What does version control mean to you?
Version control allows developers to track and manage changes to code over time. It helps collaborate, experiment safely, and maintain project history. It ensures that code is versioned, changes are reversible, and teams can work together without conflicts.

---

## Project: Minimal TODO App

**Description:**  
This is a minimal TODO app built using **Vanilla JavaScript**, HTML, and CSS. Users can add tasks, view them in a list, and optionally mark tasks as done by clicking on them.

**Live Demo:**  
[https://vc-deploy-assessment-priyal-vzzr.vercel.app/](https://vc-deploy-assessment-priyal-vzzr.vercel.app/)

---

### Features
- Add a new task
- List all tasks
- Mark tasks as done (click on task)
- Minimal styling with CSS

### File Structure
vc-deploy-assessment-priyal/
├─ index.html # Main webpage
├─ style.css # Styling for the app
├─ app.js # JavaScript logic
└─ README.md # Documentation and instructions

markdown
Copy code

---

## Branch Workflow & Git History

- Feature branch used: `feature-todo-app`  
- Pull Request: `feature-todo-app → main`

**Commits:**
1. `Initial setup: TODO app HTML, CSS, JS`  
2. `Implemented add and display TODO tasks`  
3. `Added styling and minor bug fixes`  

**Pull Request Comment Example:**
I built a minimal TODO app using Vanilla JS.
I used a feature branch and PR workflow to isolate new features and ensure code review.
Useful Git command: git checkout -b feature-todo-app

yaml
Copy code

---

## Continuous Deployment with Vercel
- Repository connected to Vercel
- Deployment automatic upon pushing branch to GitHub
- Preview deployments created for feature branches
- Production deployment triggered from `main` branch

**Environment Variable:**
TODO_APP_MODE=development

pgsql
Copy code

---

## Environments & Deployment Safety
- **Preview Environment:** Automatically deploys feature branches for testing  
- **Production Environment:** Deploys only from `main` branch to ensure stable release  
- **Environment Variables:** Can be different for each stage (Preview vs Production)  
- **Protected Branch / Approval Rule:**  
  - Prevents unreviewed code from being merged into `main`  
  - Reduces risk of introducing bugs into production

---

## Conceptual Questions

1. **What is a branch, and why use feature branches?**  
A branch is a parallel version of a repository that allows developers to work on features independently without affecting the main codebase. Feature branches improve collaboration, make code review easier, and allow safe experimentation.


2. **What is the primary role of a Pull Request in a modern deployment workflow?**  
Pull Requests allow developers to propose code changes, review them, discuss improvements, and merge them into the main branch in a controlled manner. They ensure code quality and collaboration.


3. **How can you automate deploys to Vercel directly from GitHub?**  
- Connect your GitHub repository to Vercel  
- Configure Vercel to track branches  
- Push code to GitHub → Vercel automatically builds and deploys  
- Feature branches create preview deployments; merging into `main` triggers production deployment  


4. **Explain the purpose of different "environment" types in deployment.**  
- **Development:** Local testing and experimentation  
- **Staging / Preview:** Pre-production testing for QA and review  
- **Production:** Live deployment for end-users  


5. **How do you set and securely use environment variables in platforms like Vercel?**  
- Set environment variables in Vercel dashboard or GitHub Actions  
- Do not commit sensitive variables to GitHub  
- Access in code using `process.env.VARIABLE_NAME`  


6. **When and why should you use a protected branch or a required approval rule before deploying to production?**  
- To prevent direct changes to the main branch  
- Ensures code is reviewed before production deployment  
- Reduces the risk of introducing bugs and improves deployment safety  

---
