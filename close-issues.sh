#!/bin/bash

# Script to close old GitHub issues after v2.0.0 release
# This script uses GitHub CLI (gh) to close issues
# Install gh: https://cli.github.com/

echo "======================================================================"
echo "         Closing Old Issues After v2.0.0 Release"
echo "======================================================================"
echo ""

# Check if gh is installed
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI (gh) is not installed."
    echo "📦 Install it from: https://cli.github.com/"
    echo "   Or run: brew install gh"
    echo ""
    echo "After installing, run: gh auth login"
    exit 1
fi

# Check if authenticated
if ! gh auth status &> /dev/null; then
    echo "❌ Not authenticated with GitHub CLI"
    echo "🔐 Run: gh auth login"
    exit 1
fi

echo "✅ GitHub CLI is installed and authenticated"
echo ""

# Issue closure messages
FIXED_ISSUES=(5 29 37 38)
ENHANCED_ISSUES=(30 31 33 35)
DOCUMENTED_ISSUES=(11 34)

# Close fixed issues
echo "🐛 Closing Fixed Issues..."
for issue in "${FIXED_ISSUES[@]}"; do
    echo "  Closing issue #$issue (Fixed)"
    gh issue close $issue -c "✅ **Fixed in v2.0.0**

This issue has been resolved in ScrollBox v2.0.0 which includes a complete modernization:

- Rewritten in modern vanilla JavaScript (ES6+)
- Zero dependencies
- Full TypeScript support
- Bug fixes for issues #5, #29, #37, #38

**What was fixed:**
- Issue #5: Choppy scrolling with margins - now uses proper \`offsetHeight\` with margin calculation
- Issue #29: Event parameters - fixed with proper CustomEvent handling
- Issue #37: Linear scroll on resize/zoom - now uses responsive measurements
- Issue #38: Chrome scrollbar jumping - improved scroll offset calculation

**Try it now:**
- Demo: https://wmh.github.io/jquery-scrollbox/
- Documentation: https://github.com/wmh/jquery-scrollbox#readme
- Install: \`npm install jquery-scrollbox\`

See [ISSUES_RESOLVED.md](https://github.com/wmh/jquery-scrollbox/blob/master/ISSUES_RESOLVED.md) for detailed information about all fixes.

Thank you for reporting this issue! 🎉" || echo "    ⚠️  Failed to close issue #$issue (may already be closed)"
    sleep 2
done

echo ""
echo "✨ Closing Enhanced Issues..."
for issue in "${ENHANCED_ISSUES[@]}"; do
    echo "  Closing issue #$issue (Enhanced)"
    gh issue close $issue -c "✅ **Enhanced in v2.0.0**

This feature request has been addressed in ScrollBox v2.0.0 with enhanced capabilities:

**What's available:**
- Modern event-driven architecture with CustomEvent support
- Enhanced callback system with detailed data
- Better configuration options
- Improved API for custom implementations

**How to implement your use case:**
See the [ISSUES_RESOLVED.md](https://github.com/wmh/jquery-scrollbox/blob/master/ISSUES_RESOLVED.md) file for code examples and workarounds for your specific scenario.

**v2.0.0 Features:**
- Zero dependencies (pure vanilla JavaScript)
- Full TypeScript support
- Modern ES6+ class-based architecture
- Enhanced callbacks and events
- Comprehensive documentation

**Resources:**
- Demo: https://wmh.github.io/jquery-scrollbox/
- Quick Start: https://github.com/wmh/jquery-scrollbox/blob/master/QUICK_START.md
- Full Docs: https://github.com/wmh/jquery-scrollbox#readme

If you need additional help implementing your use case, please feel free to open a new issue with your specific requirements! 🚀" || echo "    ⚠️  Failed to close issue #$issue (may already be closed)"
    sleep 2
done

echo ""
echo "📝 Closing Documented Issues..."
for issue in "${DOCUMENTED_ISSUES[@]}"; do
    echo "  Closing issue #$issue (Documented)"
    gh issue close $issue -c "✅ **Documented in v2.0.0**

This feature request has been documented with implementation examples in v2.0.0.

**Implementation Guide:**
The [ISSUES_RESOLVED.md](https://github.com/wmh/jquery-scrollbox/blob/master/ISSUES_RESOLVED.md) document includes detailed code examples showing how to implement your use case with the new v2.0 API.

**v2.0.0 Improvements:**
- Modern vanilla JavaScript with zero dependencies
- Enhanced callback system for custom logic
- Event-driven architecture for better control
- Comprehensive documentation and examples

**Resources:**
- Demo with 5 examples: https://wmh.github.io/jquery-scrollbox/
- Quick Start Guide: https://github.com/wmh/jquery-scrollbox/blob/master/QUICK_START.md
- API Documentation: https://github.com/wmh/jquery-scrollbox#readme
- Implementation Examples: https://github.com/wmh/jquery-scrollbox/blob/master/ISSUES_RESOLVED.md

Feel free to open a new issue if you need help implementing this feature! 📚" || echo "    ⚠️  Failed to close issue #$issue (may already be closed)"
    sleep 2
done

echo ""
echo "======================================================================"
echo "✅ All issues processed!"
echo "======================================================================"
echo ""
echo "📊 Summary:"
echo "  • Fixed Issues: #5, #29, #37, #38"
echo "  • Enhanced: #30, #31, #33, #35"
echo "  • Documented: #11, #34"
echo ""
echo "🔗 View closed issues:"
echo "   https://github.com/wmh/jquery-scrollbox/issues?q=is%3Aissue+is%3Aclosed"
echo ""
echo "🎉 ScrollBox v2.0.0 is ready!"
echo ""
