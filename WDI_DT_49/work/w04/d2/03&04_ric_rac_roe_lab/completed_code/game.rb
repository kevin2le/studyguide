class Game

  def initialize
    puts "\n\n\nL e t s   P l a y   R i c - R a c - R o e !\n\n"
    @scores = {x: 0, o: 0, t: 0}
    print "How many wins to play to? "
    @num_wins = gets.chomp.to_i
  end

  def play
    until @scores[:x] == @num_wins || @scores[:o] == @num_wins do
      new_game
      until @winner do
        print_board
        puts "Player #{@turn.to_s.upcase}'s Move"
        print "Enter A, B or C for Column and 1, 2 or 3 for Row (e.g., B2): "
        until get_move
          # Do nothing! Just keep looping until get_move returns true (valid move)
        end
        @turn = @turn == :x ? :o : :x
        @winner = get_winner
      end
      print_winner
      print_score
    end
  end

private

  def new_game
    @winner = nil
    @turn = :x
    @board = {
      a1: nil, b1: nil, c1: nil,
      a2: nil, b2: nil, c2: nil,
      a3: nil, b3: nil, c3: nil
    }
  end

  def print_board
    puts
    puts "    A   B   C"
    puts
    puts "1)  #{xo :a1} | #{xo :b1} | #{xo :c1}"
    puts "   -----------"
    puts "2)  #{xo :a2} | #{xo :b2} | #{xo :c2}"
    puts "   -----------"
    puts "3)  #{xo :a3} | #{xo :b3} | #{xo :c3}"
    puts
  end

  def print_winner
    print_board
    2.times { puts }
    if @winner == :t
        puts "Another TIE!"
        @scores[:t] += 1
    elsif @winner == :x
        puts "Congrats Player X!"
        @scores[:x] += 1
    elsif @winner == :o
        puts "Congrats Player O!"
        @scores[:o] += 1
    end
    puts "\n"
  end

  def print_score
    puts "\n\nSCORE:"
    puts "Player X: #{@scores[:x]}   Player O: #{@scores[:o]}   Ties: #{@scores[:t]}\n\n"
  end

  def xo(square)
    @board[square] ? @board[square].to_s.upcase : " "
  end

  def get_move
    move = gets.chomp.downcase
    if ('a'..'c').include?(move[0]) && ('1'..'3').include?(move[1])
      if @board[move.to_sym] == nil then
        @board[move.to_sym] = @turn
        return true
      else
        puts "Cell already occupied!"
        print "Enter A, B or C for Column and 1, 2 or 3 for Row (e.g., B2): "
        return false
      end
    else
      puts "Invalid move!"
      print "Enter A, B or C for Column and 1, 2 or 3 for Row (e.g., B2): "
      return false
    end
  end

  def get_winner
    if @board[:a1] && @board[:a1] == @board[:b1] && @board[:a1] == @board[:c1] then return @board[:a1] end
    if @board[:a2] && @board[:a2] == @board[:b2] && @board[:a2] == @board[:c2] then return @board[:a2] end
    if @board[:a3] && @board[:a3] == @board[:b3] && @board[:a3] == @board[:c3] then return @board[:a3] end
    if @board[:a1] && @board[:a1] == @board[:a2] && @board[:a1] == @board[:a3] then return @board[:a1] end
    if @board[:b1] && @board[:b1] == @board[:b2] && @board[:b1] == @board[:b3] then return @board[:b1] end
    if @board[:c1] && @board[:c1] == @board[:c2] && @board[:c1] == @board[:c3] then return @board[:c1] end
    if @board[:a1] && @board[:a1] == @board[:b2] && @board[:a1] == @board[:c3] then return @board[:a1] end
    if @board[:c1] && @board[:c1] == @board[:b2] && @board[:c1] == @board[:a3] then return @board[:c1] end
    if @board.values.include?(nil) then return nil end
    :t
  end

end