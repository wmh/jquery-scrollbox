# Repository Rename Guide

## Overview

This guide will help you rename the GitHub repository from `jquery-scrollbox` to `scrollbox`.

---

## ✅ Pre-Rename Checklist

All files have been updated and are ready:

- ✅ README.md - Updated all GitHub links
- ✅ package.json - Updated repository URLs
- ✅ scrollbox.js - Updated source URL
- ✅ jquery.scrollbox.js - Updated source URL
- ✅ All documentation files - Updated links
- ✅ Demo site references - Updated URLs
- ✅ CLOSE_ISSUES.md - Updated issue templates
- ✅ All other markdown files - Updated references

---

## 📋 Rename Instructions

### Step 1: Commit and Push Current Changes

```bash
cd /Users/wmh/workspaces/github/jquery-scrollbox
git add -A
git commit -m "Prepare for repository rename: jquery-scrollbox → scrollbox

- Update all GitHub URLs to new repository name
- Update package.json repository field
- Update documentation links
- Update demo site references
- All references now point to github.com/wmh/scrollbox"
git push origin master
```

### Step 2: Rename on GitHub

1. Go to: https://github.com/wmh/jquery-scrollbox/settings
2. Scroll down to "Repository name" section
3. Change name from `jquery-scrollbox` to `scrollbox`
4. Click "Rename"
5. GitHub will show a confirmation - click "I understand, rename this repository"

**⚠️ Important**: GitHub automatically sets up redirects, so all old URLs will still work!

### Step 3: Update Your Local Repository

```bash
# Update your remote URL
cd /Users/wmh/workspaces/github/jquery-scrollbox
git remote set-url origin git@github.com:wmh/scrollbox.git

# Optional: Rename your local folder
cd ..
mv jquery-scrollbox scrollbox
cd scrollbox

# Verify the new remote
git remote -v
```

### Step 4: Update gh-pages Branch (Demo Site)

```bash
# Checkout gh-pages
git checkout gh-pages

# Update references in gh-pages
sed -i '' 's|github\.com/wmh/jquery-scrollbox|github.com/wmh/scrollbox|g' index.html

# Commit and push
git add -A
git commit -m "Update demo site URLs after repository rename"
git push origin gh-pages

# Return to master
git checkout master
```

### Step 5: Verify Everything Works

Check these URLs (GitHub will redirect old ones):

- ✅ https://github.com/wmh/scrollbox (new)
- ✅ https://github.com/wmh/jquery-scrollbox (redirects to new)
- ✅ https://wmh.github.io/scrollbox/ (demo site)
- ✅ Git clones still work with both URLs

---

## 🔄 What GitHub Handles Automatically

GitHub's rename feature automatically:

✅ **Redirects all old URLs** - Every link to jquery-scrollbox redirects to scrollbox
✅ **Updates GitHub Pages** - Your demo site URL changes but redirects work
✅ **Preserves stars/forks** - All community metrics transfer
✅ **Maintains issues** - All issues, PRs, and discussions transfer
✅ **Keeps history** - All commits, tags, and branches remain intact
✅ **Updates webhooks** - CI/CD and integrations update automatically

---

## 📝 What YOU Need to Update (Optional)

These are NOT required but nice to have:

### After Rename is Complete:

1. **Update npm package (optional)**:
   - Keep as `jquery-scrollbox` OR
   - Publish new `scrollbox` package
   - Add deprecation notice on old package

2. **Update external references**:
   - Blog posts or articles
   - Social media profiles
   - External documentation
   - Any hardcoded links in other projects

3. **Announce the rename**:
   - GitHub Release announcement
   - npm package update
   - Social media post
   - Update project website

---

## 🌐 URL Changes

### Before Rename:
- Repo: https://github.com/wmh/jquery-scrollbox
- Demo: https://wmh.github.io/jquery-scrollbox/
- NPM: https://www.npmjs.com/package/jquery-scrollbox

### After Rename:
- Repo: https://github.com/wmh/scrollbox (old URL redirects here)
- Demo: https://wmh.github.io/scrollbox/ (old URL redirects here)
- NPM: https://www.npmjs.com/package/jquery-scrollbox (stays the same)

---

## ⚠️ Important Notes

1. **NPM Package Name Stays**: The npm package remains `jquery-scrollbox` unless you decide to publish a new one.

2. **Old Links Work**: GitHub redirects mean ALL old links continue to work indefinitely.

3. **No Broken Links**: Your existing users, documentation, and integrations won't break.

4. **Git Remotes**: Users with local clones will be prompted to update their remote URL (git does this automatically on next pull).

---

## 🔍 Verification Checklist

After rename, verify:

- [ ] New URL works: https://github.com/wmh/scrollbox
- [ ] Old URL redirects: https://github.com/wmh/jquery-scrollbox → redirects
- [ ] Demo site works: https://wmh.github.io/scrollbox/
- [ ] Git clone works: `git clone https://github.com/wmh/scrollbox.git`
- [ ] Issues page works: https://github.com/wmh/scrollbox/issues
- [ ] Releases page works: https://github.com/wmh/scrollbox/releases
- [ ] NPM package links work: https://www.npmjs.com/package/jquery-scrollbox

---

## 🎉 Post-Rename Announcement Template

Use this for your announcement:

```markdown
# ScrollBox Repository Renamed! 🎉

We've renamed the GitHub repository to better reflect the modern, vanilla JavaScript nature of the project:

**Old**: github.com/wmh/jquery-scrollbox  
**New**: github.com/wmh/scrollbox

## What Changed:
- ✅ Clean, modern repository name
- ✅ GitHub URL updated
- ✅ Demo site URL updated
- ✅ All internal references updated

## What Stayed the Same:
- ✅ NPM package name: `jquery-scrollbox` (for now)
- ✅ All your stars, forks, and issues
- ✅ Complete project history
- ✅ All old URLs redirect automatically

## No Action Needed:
GitHub automatically redirects all old URLs, so your bookmarks, documentation, and links will continue to work! 🚀

---

**New Repository**: https://github.com/wmh/scrollbox  
**Demo**: https://wmh.github.io/scrollbox/  
**NPM**: https://www.npmjs.com/package/jquery-scrollbox
```

---

## 🆘 Troubleshooting

### If something doesn't work:

1. **Clear browser cache** - Redirects might be cached
2. **Update git remote** - `git remote set-url origin git@github.com:wmh/scrollbox.git`
3. **Wait 5 minutes** - GitHub Pages takes a moment to update
4. **Check GitHub** - Verify rename completed in Settings

### Need help?
- GitHub Rename Docs: https://docs.github.com/en/repositories/creating-and-managing-repositories/renaming-a-repository
- Open an issue: https://github.com/wmh/scrollbox/issues

---

## ✅ Ready to Rename!

Everything is prepared. Just follow the steps above and you're done! 🎊

The rename is **safe**, **reversible**, and **won't break anything** thanks to GitHub's automatic redirects.

Good luck! 🚀
