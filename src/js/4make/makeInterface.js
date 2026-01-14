// makeInterface.js

function makeInterface(whichArray)
{
    let mainDiv = ce("div");
    mainDiv.id = 'mainDiv';
    mainDiv.className = "mainDivClass";
    ba(mainDiv);

    //-//

    let theTitle = ce('a');
    theTitle.id = 'theTitle';
    theTitle.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JavaScript_College_of_Scripting';
    theTitle.target = '_blank';
    theTitle.textContent = 'CATopalian JavaScript College of Scripting';
    theTitle.style.fontSize = '15px';
    theTitle.style.fontWeight = 'bold';
    theTitle.style.textAlign = 'right';
    theTitle.style.lineHeight = 15 + 'px';
    theTitle.style.textDecoration = 'none';
    mainDiv.append(theTitle);

    //-//

    let titleDiv = ce("div");
    titleDiv.className = "titleStyle";
    titleDiv.textContent = "College of Scripting";
    mainDiv.append(titleDiv);

    //-//

    mainDiv.append(ce('hr'));

    //-//

    let reportButton = ce("button");
    reportButton.className = "buttonFilterStyle";
    reportButton.textContent = "Report";
    reportButton.onmouseover = function()
    {
        hoverSound();
    };
    reportButton.onclick = function()
    {
        clickSound();
        reportTextArea(content);
    };
    mainDiv.append(reportButton);

    //-//

    let downloadButton = ce("button");
    downloadButton.id = "jsonDownloadButton";
    downloadButton.className = "buttonFilterStyle";
    downloadButton.value = "download";
    downloadButton.title = "downloadFile(content)";
    downloadButton.onmouseover = function()
    {
        hoverSound();
    };
    downloadButton.onclick = function()
    {
        clickSound();
        downloadFile();
    };
    downloadButton.textContent = "Download Records";
    mainDiv.append(downloadButton);

    //-//

    let hiddenAnchor = ce("a");
    hiddenAnchor.id = "downloadAnchorElem";
    hiddenAnchor.style.display = "none";
    mainDiv.append(hiddenAnchor);

    //-//

    mainDiv.append(ce('hr'));

    //-//

    for (let x = 0; x < whichArray.length; x++)
    {
        let splitUrl;
        let embedUrl;

        let theUrl;

        // The embed code for Youtube was removed because Youtube is corrupted and causes massive lag issues.
        /*
        if (whichArray[x].videoURL)
        {
            theUrl = whichArray[x].videoURL;
            // copy everything after the = symbol
            splitUrl = theUrl.split('=')[1];

            // add the youtube embed part
            embedUrl = "https://www.youtube.com/embed/" + splitUrl;
        }

        else
        {
            theUrl = whichArray[x].textureOffline;
        }
        */

        theUrl = whichArray[x].textureOffline;

        // make halfContainer
        let halfContainer = ce('div');
        halfContainer.style.display = 'flex';
        halfContainer.style.flexDirection = 'row';
        halfContainer.style.width = '100%';
        halfContainer.style.gap = '5px';
        halfContainer.style.marginTop = '10px';
        halfContainer.style.marginBottom = '10px';
        mainDiv.append(halfContainer);

        //-//

        // left side (video)
        let leftSide = ce('div');
        leftSide.style.flex = '1';
        leftSide.style.display = 'flex';
        leftSide.style.justifyContent = 'center';
        leftSide.style.alignItems = 'flex-start';
        halfContainer.append(leftSide);

        //-//

        //if (whichArray[x].videoURL)
        if (online == true)
        {
            let theIframe = ce("iframe");
            theIframe.src = embedUrl;
            theIframe.style.width = "350px";
            theIframe.style.height = "200px";
            leftSide.append(theIframe);
        }
        else
        {
            let theTexture = ce("img");
            if (online == false)
            {
                theTexture.src = whichArray[x].textureOffline;
            }
            else
            {
                theTexture.src = whichArray[x].textureOnline;
            }
            theTexture.style.width = "350px";
            theTexture.style.height = "200px";
            leftSide.append(theTexture);
        }

        //-//

        // right side (buttons and titleOfApp)
        let rightSide = ce('div');
        rightSide.style.flex = '1';
        rightSide.style.display = 'flex';
        rightSide.style.flexDirection = 'column';
        rightSide.style.gap = '1px';
        halfContainer.append(rightSide);

        //-//

        // titleOfApp
        let titleOfApp = ce("div");
        titleOfApp.style.marginTop = "10px";
        titleOfApp.textContent = whichArray[x].name.replace(/_/g, " ");
        titleOfApp.style.fontSize = '20px';
        titleOfApp.style.fontWeight = 'bold';
        titleOfApp.style.fontFamily = 'Arial';
        titleOfApp.style.marginLeft = '5px';
        // combination shadow
        titleOfApp.style.textShadow = "0 0 10px aqua, 0 0 10px black, 0 0 20px black";
        titleOfApp.style.color = 'rgb(255, 255, 255)';
        rightSide.append(titleOfApp);

        //-//

        // use app button
        let openAppInWindow = ce("button");
        openAppInWindow.className = "buttonStyle";
        openAppInWindow.textContent = "Use App";
        openAppInWindow.onmouseover = function()
        {
            hoverSound();
        };
        openAppInWindow.onclick = function()
        {
            clickSound();
            window.open(whichArray[x].appURL, "", "width=1000,height=800");
        };
        rightSide.append(openAppInWindow);

        //-//

        // code button
        let codeURLButton = ce("button");
        codeURLButton.className = "buttonStyle";
        codeURLButton.textContent = "CODE";
        codeURLButton.onmouseover = function()
        {
            hoverSound();
        };
        codeURLButton.onclick = function()
        {
            clickSound();
            window.open(whichArray[x].codeURL, "_blank");
        };
        rightSide.append(codeURLButton);

        //-//

        // videoLinkButton
        let videoLinkButton = ce("button");
        videoLinkButton.className = "buttonStyle";
        videoLinkButton.textContent = "Video";
        videoLinkButton.onmouseover = function()
        {
            hoverSound();
        };
        videoLinkButton.onclick = function()
        {
            clickSound();
            window.open(whichArray[x].videoURL, "_blank");
        };
        rightSide.append(videoLinkButton);

        //-//

        let description = ce('div');
        description.textContent = whichArray[x].description;
        description.style.color = 'rgb(255, 255, 255)'
        description.style.fontWeight = 'bold';
        description.style.marginLeft = '5px';
        description.style.marginRight = '5px';
        rightSide.append(description);

        //-//

        mainDiv.append(ce('hr'));
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

