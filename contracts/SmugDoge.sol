//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
contract SmugDogeNFT is ERC721Enumerable, Ownable {
    using SafeMath for uint256;
    using Counters for Counters.Counter;
    uint public constant MAX_SUPPLY = 700;
    uint public constant PRICE1 = 690 ether;
    uint public constant PRICE2 = 1000 ether;
    uint public constant PRICE3 = 2718 ether;
    uint public constant MAX_PER_MINT = 1;
    mapping (uint256 => bool) public tokenMinted;
    string public baseTokenURI;

    Counters.Counter private _tokenIds;
    constructor() ERC721("SmugDogeNFT", "SMDG") {
        setBaseURI("https://gateway.pinata.cloud/ipfs/QmZLiiPyzZ9V2metcCBWHapNWiWD8U5PvEkVi2LTUDk7Ly");
    }
    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }

    function setBaseURI(string memory _baseTokenURI) public onlyOwner {
        baseTokenURI = _baseTokenURI;
    }
    function mintNFTs(uint256 number) public payable {
        if(number==700) {
            require(msg.value >= PRICE3, "Not enough ether to purchase NFTs.");
        } else if(number>690) {
            require(msg.value >= PRICE2, "Not enough ether to purchase NFTs.");
        } else {
            require(msg.value >= PRICE1, "Not enough ether to purchase NFTs.");
        }
        uint totalMinted = _tokenIds.current();
        require(totalMinted < MAX_SUPPLY, "Not enough NFTs!");
        _mintSingleNFT(number);
    }
    function _mintSingleNFT(uint256 number) private {
        uint newTokenID;
        if(number==0) {
            newTokenID = _tokenIds.current();
        }else {
            newTokenID = number;
        }
        _safeMint(msg.sender, newTokenID);
        require(tokenMinted[newTokenID]==false, "This SmugDoge already minted");
        tokenMinted[newTokenID] = true;
        _tokenIds.increment();
    }
    function tokensOfOwner(address _owner) external view returns (uint[] memory) {
        uint tokenCount = balanceOf(_owner);
        uint[] memory tokensId = new uint256[](tokenCount);
        for (uint i = 0; i < tokenCount; i++) {
            tokensId[i] = tokenOfOwnerByIndex(_owner, i);
        }
        return tokensId;
    }
    function withdraw() public payable onlyOwner {
        uint balance = address(this).balance;
        require(balance > 0, "No ether left to withdraw");
        (bool success, ) = (msg.sender).call{value: balance}("");
        require(success, "Transfer failed.");
    }
    function getCurrentSupply() external view returns(uint) {
         return _tokenIds.current();
    }
}