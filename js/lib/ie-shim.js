/**
 * Created by 世宁 on 14-1-14.
 */
// IE7 support for querySelectorAll. Supports multiple / grouped selectors and the attribute selector with a "for" attribute. http://www.codecouch.com/
(function(d,s) {
    d=document, s=d.createStyleSheet();
    d.querySelectorAll = function(r, c, i, j, a) {
        a=d.all, c=[], r = r.replace(/\[for\b/gi, '[htmlFor').split(',');
        for (i=r.length; i--;) {
            console.log(s);
            s.addRule(r[i], 'k:v');
            for (j=a.length; j--;) a[j].currentStyle.k && c.push(a[j]);
            s.removeRule(0);
        }
        return c;
    }
})();