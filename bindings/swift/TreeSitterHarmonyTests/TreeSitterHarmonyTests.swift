import XCTest
import SwiftTreeSitter
import TreeSitterHarmony

final class TreeSitterHarmonyTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_harmony())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Harmony grammar")
    }
}
