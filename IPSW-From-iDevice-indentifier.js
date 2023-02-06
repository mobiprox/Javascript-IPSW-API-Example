function fetchData(limit) {
fetch('https://api.ipsw.me/v4/device/iPhone14,7')
  .then((response) => {
    return response.json();
  })
  .then(data => {
    console.log(data);
    const html = data.firmwares.slice(0, limit).map(info => {
        return `
        <div class="ipsw-info">
        <table id='ipsw-td'>
        <tr>
          <td><span  class="ios-data">Device:</span></td> 
          <td>iPhone 14 (${info.identifier})</td>
          </tr>
          <tr>
          <td><span  class="ios-data">Firmware Version:</span></td> 
          <td>iOS ${info.version} ( Build  ${info.buildid})</td>
          </tr>
          <tr>
          <td><span  class="ios-data">Released Date:</span></td>
          <td> ${info.releasedate}</td>
          </tr>
          <tr>
          <td><span  class="ios-data">File MD5sum:</span> </td>
          <td><code>${info.md5sum}</code></td>
          </tr>
          <tr>
          <td><span  class="ios-data">File SHA1sum:</span> </td>
          <td><code>${info.sha1sum}</code></td>
          </tr>
          <tr>
          <td><span  class="ios-data">Signed IPSW:</span></td>
          <td> ${info.signed}</td>
          </tr>
        </table>
        <center>
        <div class='dlBox'>
  <!--[ Change data-text='...' atribute to add new file type ]-->
  <span class='fT' data-text='IPSW'></span>
  <div class='fN'>
    <!--[ File name ]-->
    <span> Download for ${info.identifier}</span>
    <span class='fS'>Size: ${info.filesize} bytes</span>
  </div>
  
  <!--[ Download link (change href='...' atribute to add link download) ]-->
  <a class='button' aria-label='Download' href='${info.url}' rel='noreferrer' target='_blank'><i class='icon dl'></i></a>
</div>
</center>
<h4 style='color:blue; text-align:center'> Can't Download? Copy link from below, paste in a new tab to download</h4>
<div class='btnF'>
<input type="text" value="${info.url}" id="myInput" style='width:70%'>
<button class='button ln' onclick="myFunction()" onmouseout="outFunc()"><span><svg class='line' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g><rect x='5.54615' y='5.54615' width='16.45385' height='16.45385' rx='4'></rect><path d='M171.33311,181.3216v-8.45385a4,4,0,0,1,4-4H183.787' transform='translate(-169.33311 -166.86775)'></path></g></svg></span>&nbsp;
  </button>
  </div>
<div class="the-ads">
<!-- Ads here -->
</div>
        `;  
     })
    .join();
    console.log(html);
    document.querySelector('#ipsw-info').insertAdjacentHTML('afterbegin', html);
  });
}
fetchData(3)