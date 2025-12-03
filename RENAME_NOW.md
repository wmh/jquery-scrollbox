# 🚀 Rename Your Repository NOW

Everything is ready! Follow these simple steps:

---

## Step 1: Rename on GitHub (2 minutes)

1. **Open your browser** and go to:
   ```
   https://github.com/wmh/jquery-scrollbox/settings
   ```

2. **Scroll down** to the "Repository name" section

3. **Change the name** from:
   ```
   jquery-scrollbox
   ```
   to:
   ```
   scrollbox
   ```

4. **Click "Rename"** button

5. **Confirm** by clicking "I understand, rename this repository"

✅ **Done!** GitHub has renamed your repo and set up automatic redirects.

---

## Step 2: Update Your Local Repository (1 minute)

Run these commands in your terminal:

```bash
cd /Users/wmh/workspaces/github/jquery-scrollbox

# Update the remote URL to point to new repo name
git remote set-url origin git@github.com:wmh/scrollbox.git

# Verify it worked
git remote -v
# Should show: git@github.com:wmh/scrollbox.git
```

---

## Step 3: Update gh-pages Branch (1 minute)

```bash
# Switch to gh-pages branch
git checkout gh-pages

# Update the demo site URLs
sed -i '' 's|jquery-scrollbox|scrollbox|g' index.html

# Commit and push
git add index.html
git commit -m "Update demo site URLs after repository rename"
git push origin gh-pages

# Switch back to master
git checkout master
```

---

## Step 4: Rename Your Local Folder (Optional)

```bash
cd ..
mv jquery-scrollbox scrollbox
cd scrollbox
```

---

## ✅ Verification

Check these URLs work:

- [ ] New repo URL: https://github.com/wmh/scrollbox
- [ ] Old URL redirects: https://github.com/wmh/jquery-scrollbox
- [ ] Demo site: https://wmh.github.io/scrollbox/
- [ ] Can run: `git pull`

---

## 🎉 That's It!

Your repository is now renamed to `scrollbox`!

### What Happened:
- ✅ Repository renamed on GitHub
- ✅ All old URLs automatically redirect
- ✅ Stars, forks, issues all preserved
- ✅ Demo site updated
- ✅ Local repo connected to new URL

### What Stayed the Same:
- ✅ NPM package: still `jquery-scrollbox`
- ✅ All project history intact
- ✅ No broken links anywhere

---

## 📝 Next Steps (Optional)

1. **Announce the rename** on social media
2. **Update any external references** (blog posts, etc.)
3. **Create a GitHub release** mentioning the rename

---

## Need Help?

- Read full guide: `cat RENAME_GUIDE.md`
- GitHub docs: https://docs.github.com/en/repositories/creating-and-managing-repositories/renaming-a-repository
- Open an issue: https://github.com/wmh/scrollbox/issues

---

**Total Time: ~5 minutes** ⏱️

Good luck! 🚀
