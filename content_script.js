walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bAfrican American\b/g, "Nigger");
	v = v.replace(/\bafrican american\b/g, "nigger");
	v = v.replace(/\bAfrican american\b/g, "Nigger");
	v = v.replace(/\bAfrican-American\b/g, "Nigger");
	v = v.replace(/\bAfrican-american\b/g, "Nigger");
	v = v.replace(/\bafrican-american\b/g, "nigger");
	v = v.replace(/\bBlack guy\b/g, "Nigger");
	v = v.replace(/\bBlack Guy\b/g, "Nigger");
	v = v.replace(/\bblack guyb/g, "nigger");
	v = v.replace(/\bblack Guy\b/g, "nigger");
	v = v.replace(/\bblack people\b/g, "niggers");
	v = v.replace(/\bBlack people\b/g, "Niggers");
	v = v.replace(/\bblack person\b/g, "nigger");
	v = v.replace(/\bBlack person\b/g, "Nigger");
	v = v.replace(/\bBrown\b/g, "Nigger");
	v = v.replace(/\bbrown\b/g, "nigger");
	v = v.replace(/\bblack\b/g, "nigger");
	v = v.replace(/\bBlack\b/g, "Nigger");
	v = v.replace(/\bblacks\b/g, "niggers");
	v = v.replace(/\bBlacks\b/g, "Niggers");
	v = v.replace(/\bperson of color\b/g, "nigger");
	v = v.replace(/\bperson of colour\b/g, "nigger");
	v = v.replace(/\bPerson of color\b/g, "Nigger");
	v = v.replace(/\bPerson of colour\b/g, "Nigger");
	v = v.replace(/\bPeople of colour\b/g, "Niggers");
	v = v.replace(/\bPeople of color\b/g, "Niggers");
	v = v.replace(/\bpeople of colour\b/g, "niggers");
	v = v.replace(/\bpeople of color\b/g, "niggers");
	v = v.replace(/\bAfrican\b/g, "Nigger");
	v = v.replace(/\bafrican\b/g, "nigger");
	v = v.replace(/\bAfricans\b/g, "Niggers");
	v = v.replace(/\bafricans\b/g, "niggers");
	v = v.replace(/\bslave\b/g, "nigger");
	v = v.replace(/\bslaves\b/g, "niggers");
	v = v.replace(/\bSlave\b/g, "Nigger");
	v = v.replace(/\bSlaves\b/g, "Niggers");
	v = v.replace(/\bNon-white\b/g, "Nigger");
	v = v.replace(/\bnon-white\b/g, "nigger");
	v = v.replace(/\bcolored\b/g, "nigger");
	v = v.replace(/\bColored\b/g, "Nigger");
	v = v.replace(/\bcoloured\b/g, "nigger");
	v = v.replace(/\bColoured\b/g, "Nigger");
	v = v.replace(/\bn-word\b/g, "nigger");
	v = v.replace(/\bN-word\b/g, "Nigger");


	textNode.nodeValue = v;
}


