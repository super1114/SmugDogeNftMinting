// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract SmugDoge is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    uint256 private _maxSupply = 690;
    string public _baseURL;
    uint256 public launchDate;
    mapping(uint256 => string) tokenUrls;

    constructor() ERC721("SmugDoge", "SMD") {
        setBaseURL("ipfs://");
    }

    // function mint(string memory metadataURI) external payable {
    //     require(
    //         _tokenIds.current() < _maxSupply,
    //         "Can not mint more than max supply"
    //     );
    //     require(msg.value >= 420 ether, "Insufficient payment");

    //     _safeMint(msg.sender, _tokenIds.current());
    //     // _setTokenURI(_tokenIds.current(), metadataURI);
    //     _tokenIds.increment();
    // }

    function mint(uint256 count) external payable {
        require(
            _tokenIds.current() < _maxSupply,
            "Can not mint more than max supply"
        );
        require(
            count > 0 && count <= 12,
            "You can mint between 1 and 12 at once"
        );
        require(msg.value >= count * 0.069 ether, "Insufficient payment");
        for (uint256 i = 0; i < count; i++) {
            _tokenIds.increment();
            _mint(msg.sender, _tokenIds.current());
        }

        bool success = false;
        (success, ) = owner().call{value: msg.value}("");
        require(success, "Failed to send to owner");
    }

    function getTokenURL(uint256 tokenId) public view returns (string memory) {
        return tokenUrls[tokenId];
    }

    function setBaseURL(string memory baseURI) public onlyOwner {
        _baseURL = baseURI;
    }

    function setMaxSupply(uint256 value) public onlyOwner {
        _maxSupply = value;
    }

    // function _baseURI() internal view returns (string memory) {
    //     return _baseURL;
    // }

    function maxSupply() public view returns (uint256) {
        return _maxSupply;
    }

    // function totalSupply() public view override returns (uint256) {
    //     return _tokenIds.current();
    // }

    function withdrawONE(address payable _addr, uint256 amount)
        public
        onlyOwner
    {
        _addr.transfer(amount);
    }

    // function withdrawONEOwner(uint256 amount) public onlyOwner {
    //     msg.sender.transfer(amount);
    // }
}
