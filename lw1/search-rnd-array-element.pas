program SearchRndElementInRndArray;
uses crt;
const N = 10;
var
  a: array [1..N] of integer;
  k: integer;
  isFound: boolean;
  i: integer;
begin
  randomize;
  
  k := Random(15);
  IsFound := False;
  
  writeln('Filled random array: ');
  for i := 1 to N do 
  begin
    a[i] := Random(15);
    write(a[i], ' ');
      if a[i] = k then 
      begin
        IsFound := True;
      end;
  end;
  
  writeln;  
  
  if IsFound = True then
  begin
    writeln('Element ', k, ' is found!');
  end  
  else
  begin
    writeln('Element ', k, ' not found');
  end;  
end.