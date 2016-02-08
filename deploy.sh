git checkout production &&
git rebase master &&
grunt build &&
git add -f dist &&
git commit -m 'update build' &&
git push -f origin production &&
wd deploy --to=production &&
git checkout master
