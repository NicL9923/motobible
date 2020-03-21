import React from 'react';
import { Helmet } from 'react-helmet';

class DonateComponent extends React.Component {
    render() {
        return(
        <div className="container card card-body my-3">
            <Helmet>
                    <title>Moto Bible | Donate</title>
                    <meta
                        name="description"
                        content="Donate to The Motorcyclist's Bible"
                    />
                    <meta name="keywords" content="motorcycle, motorcycles, moto, motobible, rider, riding, cruising, cruiser, bike, bible, motorcyclist, 
                    motorcyclist's, minigames, chatroom, blog, resources, license, donate, donation, support"/>
                </Helmet>

            <div>
                <h3>A Message from the Owner</h3>
                <p>
                    It goes without saying that you are under absolutely no obligation
                    to donate to The Motorcyclist's Bible. With that being said, if you
                    enjoy our content and what we do here, every little bit is appreciated
                    and helps keep us up and running, and producing new content.
                </p>
                <p>Listed below are ways you can help out, ranging from a straightforward donation to affiliate links that may catch your interest. Thanks again!</p>
            </div>

            <div className="container my-2">
                <h3>Donate</h3>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_donations" />
                    <input type="hidden" name="business" value="GXMRWU3H4MPLG" />
                    <input type="hidden" name="currency_code" value="USD" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </div>

            <div className="container my-2">
                <h3>Affiliate Links</h3>
                <p><a href="https://mbsy.co/DGCz2">M1 Finance: </a>My personal investment/stock broker. Outstanding for anyone from beginners to experts, 
                I find this broker to be the most user-friendly and accessible.</p>
                <div className="alignleft">
                    <script type="text/javascript">
                        amzn_assoc_ad_type = "banner";
                        amzn_assoc_marketplace = "amazon";
                        amzn_assoc_region = "US";
                        amzn_assoc_placement = "assoc_banner_placement_default";
                        amzn_assoc_campaigns = "motorcycleatv";
                        amzn_assoc_banner_type = "category";
                        amzn_assoc_isresponsive = "true";
                        amzn_assoc_banner_id = "1GTBWXZ6AWK39XVHDN82";
                        amzn_assoc_tracking_id = "motobible-20";
                        amzn_assoc_linkid = "c3d9747c703dd8a480e4bdfc2c25bf61";
                    </script>
                    <script src="//z-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1"></script>
                </div>

            </div>
        </div>
        );
    }
};

export default DonateComponent;