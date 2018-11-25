jscript.form.formToXML = function(inForm, inRootElement) {
    if (inForm == null) {
        return null;
    }
    if (inRootElement == null) {
        return null;
    }
    var outXML = "<" + inRootElement + ">";
    var i;
    for (i = 0; i < inForm.length; i++) {
        var ofe = inForm[i];
        var ofeType = ofe.type.toUpperCase();
        var ofeName = ofe.name;
        var ofeValue = ofe.value;
        if (ofeType == "TEXT" || ofeType == "HIDDEN" || ofeType == "PASSWORD" || ofeType == "SELECT-ONE" || ofeType == "TEXTAREA") {
            outXML += "<" + ofeName + ">" + ofeValue + "</" + ofeName + ">" 
        }
        if (ofeType == "RADIO" && ofe.checked == true) {
            outXML += "<" + ofeName + ">" + ofeValue + "</" + ofeName + ">"
        }
        if (ofeType == "CHECKBOX") {
            if (ofe.checked == true) {
                cbval = "true";
            } else {
                cbval = "false";
            }
            outXML = outXML + "<" + ofeName + ">" + cbval + "</" + ofeName + ">"
        }
        outXML += "";
    }
    outXML += "</" + inRootElement + ">";
    return outXML;
}