<!DOCTYPE html> 
<html lang="en"> 
<head>
    <meta charset="utf-8">
    <title>CarbonWallet - Secure Bitcoin Wallet</title> 
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="Deterministic Bitcoin Wallet" name="description">
    <meta content="carbonwallet" name="author">
    <link href="css/default.css" rel="stylesheet">
    
    <!-- The following external libraries need to be downloaded here. -->
    <link href="https://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/bootstrap-combined.min.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
    <script src="https://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/js/bootstrap.min.js"></script>
    <script src="https://raw.github.com/bitcoinjs/bitcoinjs-lib/master/build/bitcoinjs-min.js"></script>
    <!-- End of safe guarded libraries. -->
    
    <script src="extjs/qrcode.js"></script> 
    <!--<script src="js/rfc1751.js"></script>  --> 
    <script src="extjs/mnemonic.js"></script> 
    <!--<script src="js/armory.js"></script> -->
    <script src="extjs/electrum.js"></script> 
    <script src="js/tx.js"></script> 
    <!--<script src="js/bitcoinsig.js"></script> --> 
    <script src="js/invisiwallet.js"></script> 
    <!--<script src="js/brainwallet.js"></script>-->
    <link href="favicon.ico" rel="shortcut icon">
</head>
<body>
<div class="navbar navbar-fixed-top"> 
    <div class="navbar-inner"> 
        <div class="container"> 
            <a class="btn btn-navbar" data-target=".nav-collapse" data-toggle="collapse"> 
            <span class="icon-bar"></span> <span class="icon-bar"></span> 
            <span class="icon-bar"></span> </a> <a class="brand" href="/">CarbonWallet</a> 
            <div class="nav-collapse"> 
                <ul class="nav">
                    <li class="active">
                    <a data-toggle="tab" href="#generator">Generator</a></li> 
                    <li><a data-toggle="tab" href="#chains" id="tab-chains">About Us</a></li> 
                    <li>
                    <a data-toggle="tab" href="#tx" id="tab-tx">Support</a></li> 
                </ul>
            </div>
        </div>
    </div>
</div>
<div class="container"> 

<!-- Home Page -->

      <div id="logon" class="tab-pane fade in active" >
        <div class="well" id="form-well">
            <form>
                <input id="password" placeholder="Please enter your passphrase." value="" class="input-medium" type="password" />
                <input id="open-sesame" disabled data-toggle="collapse" data-target="#create-keys" class="btn disabled" value="Open Wallet" />
                <input id="generate-password" class="btn btn-success" data-toggle="collapse" data-target="#create-wallet" value="Create a new wallet" />
            </form>
            <div id="create-keys" class="collapse">
              <div class="progress">
                <div class="bar" id="seed-progress" style="width: 0%;"></div>
              </div>
            </div>
            <div id="create-wallet" class="collapse">
                <h4>To use Carbon Wallet you need a really big password.</h4>
                <p>We have created a password for you. To use the CarbonWallet write 
                your password down and keep it safe.</p>
                <p>
                    <input id="generated" readonly value="" class="input-medium" type="text" />
                    <button class="btn" id="regenerate-password" title="Random" type="button"><i class="icon-repeat"></i></button>
                </p>
                <p>Make sure no-one is near you when you create this password. 
                If anyone sees your password, or gets it from you, they steal your Bitcoins.</p>
            </div>
        </div>
      </div>   

<!-- My Addresses -->

    <div id="site" class="tab-pane fade in ">
      <div class="row">
        <div class="span3">
          <ul class="nav nav-list">
            <li class="nav-header">Wallet Options</li>
            <li class="active"><a href="#" id="your-addresses-nav"><i class="icon-align-justify"></i>Your Addresses</a></li>
            <li><a href="#" id="make-payment-nav"><i class="icon-share"></i>Make a Payment</a></li>
          </ul>
        </div>
        <div id="your-addresses" class="span9">
          <h4>Your Bitcoin Addresses</h4>
          <table class="table table-bordered table-striped">
          <thead>
          <tr>
            <th>Public Address</th>
            <th>Balance</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tr>
            <td><code id="address0"></code></td>
            <td><span><strong id="balance0">&nbsp;</strong></span></td>
            <td><i class="icon-qrcode"></i></td>
          </tr>
          <tr>
            <td><code id="address1"></code></td>
            <td><span><strong id="balance1">&nbsp;</strong></span></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td><code id="address2"></code></td>
            <td><span><strong id="balance2">&nbsp;</strong></span></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td><code id="address3"></code></td>
            <td><span><strong id="balance3">&nbsp;</strong></span></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td><code id="address4"></code></td>
            <td><span><strong id="balance4">&nbsp;</strong></span></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td><code id="address5"></code></td>
            <td><span><strong id="balance5">&nbsp;</strong></span></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td><code id="address6"></code></td>
            <td><span><strong id="balance6">&nbsp;</strong></span></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td><code id="address7"></code></td>
            <td><span><strong id="balance7">&nbsp;</strong></span></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td><code id="address8"></code></td>
            <td><span><strong id="balance8">&nbsp;</strong></span></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td><code id="address9"></code></td>
            <td><span><strong id="balance9">&nbsp;</strong></span></td>
            <td>&nbsp;</td>
          </tr>
          </table>
        </div> 
        
        <div class="span9" id="tx"> 
            <h4>Make a Payment</h4>
            <form action="/" class="form-vertical" method="get">
            <fieldset> 
                <div class="control-group form-hide"> 
                    <label class="control-label" for="txSec">Private Key</label> 
                    <div class="controls"> 
                        <input class="span5" id="txSec" type="text"> 
                        <span class="help-inline errormsg"></span> 
                    </div>
                </div>
                <div class="control-group"> 
                    <label class="control-label" for="txDropAddr">Source Address</label> 
                    <div class="controls"> 
                        <select class="span4" id="txDropAddr"> 
                        </select>
                        <div class="input-prepend"> <span class="add-on">BTC</span><input class="span2" id="txBalance" readonly type="text"> 
                        </div>
                        <!--<button class="btn" id="txDropGetUnspent" title="Reload" type="button"><i class="icon-repeat"></i></button> 
                        <button class="btn" data-target="#txUnspentForm" data-toggle="collapse" id="txToggle" type="button">Edit Inputs</button>-->
                    </div>
                </div>
                <div class="control-group txCC"> 
                    <label class="control-label" for="txDest">Destination Address</label> 
                    <div class="controls"> 
                        <input id="txDest" class="span4 txDest" type="text" placeholder="E.g. 1BountYypWttTvAJcMJVvSRDfX3TJ182To" autocomplete="off"> 

                        <div class="input-prepend"> 
                          <span class="add-on">BTC</span>
                          <input class="span2" id="txValue" placeholder="E.g. 0.01" type="text" autocomplete="off"> 
                        </div>
                        <span class="help-inline errormsg">
                            <button class="btn input-up" style="margin-bottom: 10px" id="txAddDest" type="button">+</button> 
                            <button class="btn input-up" style="margin-bottom: 10px" id="txRemoveDest" type="button" disabled>&ndash;</button> 
                        </span> 
                    </div>
                </div>
                <div class="control-group"> 
                    <label class="control-label" for="txFee">Fee (Includes Miners Fee)</label> 
                    <div class="controls"> 
                        <div class="input-prepend"><span class="add-on">BTC</span><input readonly class="span2" id="txFee" type="text" value="0.0005"></div>
                    </div>
                </div>
                <div class="control-group"> 
                    <label class="control-label" for="txFee">You can check the payment before it is sent to the network.</label> 
                    <div class="controls"> 
                        <button class="btn" disabled style="margin-bottom: 10px" id="txSend" type="button">Verify and Send</button>
                    </div>
                </div>
            </fieldset>
            </form>
            <div id="verifyModal" class="modal hide">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h6>Send payment of <span id="verifyAmountTitle">0.005</span> BTC from <span id="verifySource">1BountYypWttTvAJcMJVvSRDfX3TJ182</span></h6>
              </div>
              <div id="verifyBody" class="modal-body">
                <table class="table table-bordered">
                  <thead id="verifyTable">
                  <tr>
                    <th>Destination Address</th>
                    <th>Amount</th>
                  </tr>
                  </thead>
                  <tr>
                    <td><small><span class="label">A miners fee of 0.0005 BTC will be charged.</span></small></td>
                    <td><small><span><strong>0.0005</strong></span></small></td>
                  </tr>
                  <tfoot>
                  <tr>
                    <td><strong>Total</strong></td>
                    <td><strong id="verifyTotal">50.05</strong> BTC</td>
                  </tr>
                  </tfoot>
                </table>
                <div class="control-group"> 
                    <label class="control-label" for="txJSON">JSON Transaction</label> 
                    <div class="controls"> 
                        <textarea class="span5" id="txJSON" rows="4"></textarea>
                    </div>
                </div>
                <div class="control-group"> 
                    <label class="control-label" for="txHex">Raw Transaction</label> 
                    <div class="controls"> 
                        <textarea class="span5" id="txHex" rows="4"></textarea>
                    </div>
                </div>
              </div>
              <div class="modal-footer">
                <a href="#" data-dismiss="modal" class="btn">Cancel</a>
                <a href="#" id="sendPayment" data-dismiss="modal" class="btn btn-primary">Send Payment</a>
              </div>
            </div>
        </div>
        
      </div> 
    </div>           

    <footer class="navbar navbar-fixed-bottom"> 

    <p>CarbonWallet &copy; 2013</p>
    <p><small>Powered by 
    <a href="http://pages.github.com">GitHub Pages</a> | 
    <a href="https://github.com/carbonwallet/carbonwallet.github.io">View Source Code</a> 
    </small></p> 
    </footer> 
</div>
</body>
</html> 
