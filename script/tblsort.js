/*--Sortable Table Javascript wrapper library;  V1.0 @2015-07-28 
Inspiried by MochiKit Sortable Tables.
Basic usage: new tblsort('tablename');
jimyuyuyi@gmail.com
--*/
var tblsort=function(table,headind)
{	table=this.getelement(table);
	if(!table){return;}	
	this.tbody=null;this.toprow=null;
	this.colfmts=[];this.bodyrows=[];
	this.sortkey=Number.NaN;this.fwdflag=true;
	this.arrownode=document.createElement('span');
	this.arrownode.className='tblsortarrow';
	this.tbody=table.getElementsByTagName('tbody');
	this.tbody=this.tbody[this.tbody.length-1];
	var rows=this.tbody.getElementsByTagName('tr');
	if(rows.length<=0){rows=this.tbody.childNodes;}	
	if(!headind||isNaN(headind))
	{	headind=-1;
	}var theadnd=table.getElementsByTagName('thead');
	if(theadnd.length>0&& theadnd[theadnd.length-1].childNodes.length>0&& headind<0)
	{	this.toprow=theadnd[theadnd.length-1];
		this.toprow=this.toprow.childNodes[this.toprow.childNodes.length-1];
		headind=-1;
	}else
	{	if(headind<0){headind=0;}
		if(rows[headind])
		{	this.toprow=rows[headind].cloneNode(true);
		}
	}if(!this.toprow){return;}
	this.pretoprows=[];
	for(var i=0;i<headind;i++)
	{	this.pretoprows.push(rows[i].cloneNode(true));
	}
	for(var i=0;i<this.toprow.childNodes.length;i++)
	{	var node=this.toprow.childNodes[i];
		if(!node.tagName||!node.tagName.match(/^t[hd]$/i)){continue;}
		var attr=null;
		try{attr=''+node.getAttribute('sortformat');}catch(err){}		
		this.colfmts.push(attr);
		if(attr!='none')
		{	node.parobj=this;
			node.ind=i;
			node.onclick=function(e){this.parobj.drawSortedRows(this.ind);}
			node.style.cursor='pointer';
		}
	}for(var i=headind+1;i<rows.length;i++)
	{	var row=rows[i];
		var cols=row.getElementsByTagName('td');
		var rowData={};
		for(var j=0;j<cols.length;j++)
		{	var cell=cols[j];
			var val=''+cell.innerHTML;
			val=val.replace(/<[^>]+>/g,'');
			switch(this.colfmts[j]){
				case 'isodate':
					val=isoDate(val);
					break;
				case 'eosdateparse':
					val=val.replace(/ - .*/,'').substring(4);
				case 'dateparse':
					var val2=val;
					if(Date.parse&& (typeof(Date.parse)).search(/funct/i)>=0)
					{	var val2=Date.parse(val);									
					}if(isNaN(val2)){val2=parseFloat(val.replace(/\D/g,''));}
					val=val2;
					break;			
				case 'float': case 'num':
					val=parseFloat(val);
					if(isNaN(val)){val=-Infinity;}
					break;
				case 'istr':
					val=val.toLowerCase();
					break;
				case 'powval':
					if((typeof(powvalstr_parse)).search(/funct/i)>=0)
					{	val=powvalstr_parse(val);
					}break;
				default: break;
			}rowData[j]=val;
		}rowData.row=row.cloneNode(true);
		this.bodyrows.push(rowData);
	}this.drawSortedRows(this.sortkey);
};
tblsort.prototype.getelement=function(nd)
{	var ud;
	if(nd==ud||nd.tagName){return nd;}
	if((typeof(nd)).match(/^str/i))
	{	var nd2=document.getElementById(nd);
		if(!nd2)
		{	nd2=document.getElementsByName(nd);
			if(nd2&& nd2.length>0){nd2=nd2[0];}
			else{nd2=ud;}
		}return nd2;
	}return ud;
};
tblsort.prototype.drawSortedRows=function(key)
{	if(!isNaN(key)&& this.sortkey==key)
	{	if(!this.fwdflag)
		{	key=Number.NaN;
		}this.fwdflag=!this.fwdflag;
	}else
	{	this.fwdflag=true;
	}this.sortkey=key;
	if(this.arrownode.parentNode)
	{	this.arrownode.parentNode.removeChild(this.arrownode);
	}var newrows=this.bodyrows.slice(0);
	if(!isNaN(key))
	{	newrows.sort(function(a,b){
			return (a[key]==b[key])?0:(a[key]<b[key]?-1:1);
		});
		if(!this.fwdflag)
		{	newrows=newrows.reverse();
		}this.arrownode.innerHTML=(this.fwdflag?'\u2191':'\u2193');
		this.toprow.childNodes[key].appendChild(this.arrownode);
	}var newbody=document.createElement('tbody');
	for(var j=0;j<this.pretoprows.length;j++)
	{	newbody.appendChild(this.pretoprows[j]);
	}newbody.appendChild(this.toprow);
	for(var j=0;j<newrows.length;j++)
	{	newbody.appendChild(newrows[j].row);
	}this.tbody.parentNode.replaceChild(newbody,this.tbody);
	this.tbody=newbody;	
};
