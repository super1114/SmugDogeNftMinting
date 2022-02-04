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
    uint public constant PRICE = 420 ether;
    uint public constant MAX_PER_MINT = 1;

    string public baseTokenURI;

    Counters.Counter private _tokenIds;
    constructor() ERC721("SmugDogeNFT", "SMDG") {
        setBaseURI("https://gateway.pinata.cloud/ipfs/QmaLoTEQzjkUx89tQzWMcmC97BgRg31KHrCGzYDda1TZyG");
    }
    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }

    function setBaseURI(string memory _baseTokenURI) public onlyOwner {
        baseTokenURI = _baseTokenURI;
    }
    function mintNFTs() public payable {
        uint totalMinted = _tokenIds.current();
        require(totalMinted < MAX_SUPPLY, "Not enough NFTs!");
        require(msg.value >= PRICE, "Not enough ether to purchase NFTs.");
        _mintSingleNFT();
    }
    function _mintSingleNFT() private {
        uint newTokenID = _tokenIds.current();
        _safeMint(msg.sender, newTokenID);
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
}