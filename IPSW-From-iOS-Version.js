function fetchData() {
fetch('https://api.ipsw.me/v4/ipsw/16.1.1')
  .then((response) => {
    return response.json();
  })
  .then(data => {
    console.log(data);
    const html = data.map(info => {
        return `
        <div class="ipsw-info">
        <table id='ipsw-tb' >
        <tbody>
          <tr>
          <td><span  class="ios-data">Firmware Version:</span></td> 
          <td>${info.version}</td>
          </tr>
          <tr>
          <td><span  class="ios-data">Firmware Identifier:</span></td> 
          <td>${info.identifier}</td>
          </tr>
          <tr>
          <td><span  class="ios-data">Build ID:</span> </td>
          <td>${info.buildid}</td>
          </tr>
          <tr>
          <td><span  class="ios-data">Released Date:</span></td>
          <td> ${info.releasedate}</td>
          </tr>
          <tr>
          <td><span  class="ios-data">File MD5sum:</span> </td>
          <td>${info.md5sum}</td>
          </tr>
          <tr>
          <td><span  class="ios-data">File SHA1sum:</span> </td>
          <td>${info.sha1sum}</td>
          </tr>
          <tr>
          <td><span  class="ios-data">Signed IPSW:</span></td>
          <td> ${info.signed}</td>
          </tr>
          <tr>
          <td><span  class="ios-data">Size:</span></td>
          <td> ${info.filesize} Bytes</td>
       </tbody>
        </table>
        <center>
        <div class='dlBox'>
  <!--[ Change data-text='...' atribute to add new file type ]-->
  <span class='fT' data-text='IPSW'></span>
  <div class='fN'>
    <!--[ File name ]-->
    <span> Download for ${info.identifier}</span>
    <span class='fS'>${info.filesize} bytes</span>
  </div>
  
  <!--[ Download link (change href='...' atribute to add link download) ]-->
  <a class='button' aria-label='Download' href='${info.url}' rel='noreferrer' target='_blank'><i class='icon dl'></i></a>
</div>
</center>
  </div>
  <div class="the-ads">
<!-- Ads go here -->
</div>
        `;  
     })
    .join();
    console.log(html);
    document.querySelector('#ipsw-info').insertAdjacentHTML('afterbegin', html);
  });
}
fetchData()