git checkout production &&
git rebase master &&
grunt build &&
git add dist &&
git commit -m 'update build' &&
git push origin production &&
wd deploy --to=production &&
git checkout master
